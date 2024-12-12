import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables from `.env.local`
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import prompts from "prompts";
import { PublicKey } from "@solana/web3.js";
import { getAccount, getAssociatedTokenAddress } from "@solana/spl-token";

import { Turnkey } from "@turnkey/sdk-server";
import { TurnkeySigner } from "@turnkey/solana";

import {
  createMint,
  createNewSolanaWallet,
  createToken,
  createTokenAccount,
  createTokenTransfer,
  solanaNetwork,
  TURNKEY_WAR_CHEST,
} from "./utils";

import keys from "./keys";

import {
  createUser,
  createPolicy,
} from "./requests";

async function main() {
  const turnkeyWarchest = new PublicKey(TURNKEY_WAR_CHEST);
  const organizationId = process.env.ORGANIZATION_ID!;
  const connection = solanaNetwork.connect();

  // Root user API Client
  const turnkeyClient = new Turnkey({
    apiBaseUrl: process.env.BASE_URL!,
    apiPublicKey: process.env.API_PUBLIC_KEY!,
    apiPrivateKey: process.env.API_PRIVATE_KEY!,
    defaultOrganizationId: organizationId,
  });

  // Root user Turnkey signer
  const turnkeySigner = new TurnkeySigner({
    organizationId,
    client: turnkeyClient.apiClient(),
  });

  let solAddress = process.env.SOLANA_ADDRESS!;
  if (!solAddress) {
    solAddress = await createNewSolanaWallet(turnkeyClient.apiClient());
    console.log(`\nYour new Solana address: "${solAddress}"`);
  } else {
    console.log(`\nUsing existing Solana address from ENV: "${solAddress}"`);
  }

  const fromKey = new PublicKey(solAddress);

  let balance = await solanaNetwork.balance(connection, solAddress);
  while (balance === 0) {
    console.log(
      [
        `\n💸 Your onchain balance is at 0! To continue this demo you'll need devnet funds! You can use:`,
        `- The faucet in this example: \`pnpm run faucet\``,
        `- The official Solana CLI: \`solana airdrop 1 ${solAddress}\``,
        `- Any online faucet (e.g. https://faucet.solana.com/)`,
        `\nTo check your balance: https://explorer.solana.com/address/${solAddress}?cluster=devnet`,
        `\n--------`,
      ].join("\n")
    );
    // Await user confirmation to continue
    await prompts([
      {
        type: "confirm",
        name: "ready",
        message: "Ready to Continue?",
      },
    ]);

    // refresh balance...
    balance = await solanaNetwork.balance(connection, solAddress);
  }

  // Create SPL token
  const { mintAuthority } = await createToken(
    turnkeySigner,
    connection,
    solAddress
  );

  // Create token accounts
  const ataPrimary = await getAssociatedTokenAddress(
    mintAuthority.publicKey, // mint
    fromKey // owner
  );

  const ataWarchest = await getAssociatedTokenAddress(
    mintAuthority.publicKey, // mint
    turnkeyWarchest // owner
  );

  // For warchest
  await createTokenAccount(
    turnkeySigner,
    connection,
    solAddress,
    ataWarchest,
    turnkeyWarchest,
    mintAuthority
  );

  const tokenAccountWarchest = await getAccount(connection, ataWarchest);

  // For self
  await createTokenAccount(
    turnkeySigner,
    connection,
    solAddress,
    ataPrimary,
    fromKey,
    mintAuthority
  );

  const tokenAccount = await getAccount(connection, ataPrimary);

  // Mint token
  await createMint(
    turnkeySigner,
    connection,
    solAddress,
    tokenAccount.address,
    mintAuthority.publicKey
  );
  
  // Create non-root user 
  let nonRootUserID = await createUser(
    turnkeyClient.apiClient(),
    "Non Root User",
    "Non Root User Key",
    keys!.nonRootUser!.publicKey!
  );

  // Create non root user API Client
  const nonRootUserTurnkeyClient = new Turnkey({
    apiBaseUrl: process.env.BASE_URL!,
    apiPublicKey: keys!.nonRootUser!.publicKey!,
    apiPrivateKey: keys!.nonRootUser!.privateKey!,
    defaultOrganizationId: organizationId,
  });

  const nonRootUserSigner = new TurnkeySigner({
    organizationId,
    client: nonRootUserTurnkeyClient.apiClient(),
  });

  // Create policy to allow non root user to send SPL tokens to the Token account address for Warchest
  await createPolicy(
    turnkeyClient.apiClient(),
    "Let non root user send SPL transfers to the ATA of WARCHEST",
    "EFFECT_ALLOW",
    `approvers.any(user, user.id == '${nonRootUserID}')`,
    `solana.tx.spl_transfers.any(transfer, transfer.to == '${tokenAccountWarchest.address}')`
  );

  // Transfer token from primary to Warchest
  await createTokenTransfer(
    nonRootUserSigner,
    connection,
    solAddress,
    tokenAccount.address,
    mintAuthority.publicKey,
    tokenAccountWarchest.address
  );

  const tokenBalance = await connection.getTokenAccountBalance(ataPrimary);
  console.log("Token balance for user:", tokenBalance.value.uiAmountString);

  const tokenBalanceWarchest = await connection.getTokenAccountBalance(
    ataWarchest
  );
  console.log(
    "Token balance for warchest:",
    tokenBalanceWarchest.value.uiAmountString
  );

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
