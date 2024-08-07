import React, { createContext, useContext, useState, useEffect } from "react";

import { type TurnkeyClient } from "@turnkey/http";

import {
  SolanaWalletInterface,
  TStamper,
  WalletInterface,
  WalletStamper,
  EvmWalletInterface,
} from "@turnkey/wallet-stamper";
import { createWebauthnStamper, Email, registerPassKey } from "@/lib/turnkey";
import { createUserSubOrg } from "@/lib/server";
import { ChainType } from "@/lib/types";
import { useWallet } from "@solana/wallet-adapter-react";

// Context for the TurnkeyClient
const TurnkeyContext = createContext<{
  client: TurnkeyClient | null;
  passkeyClient: TurnkeyClient | null;
  walletClient: TurnkeyClient | null;
  createSubOrg: (email: Email, chainType?: ChainType) => Promise<void>;
  addWalletAuthenticator: (email: Email) => Promise<void>;
  setWallet: (wallet: WalletInterface | null) => void;
  signInWithWallet: (email: Email) => Promise<void>;
}>({
  client: null,
  passkeyClient: null,
  walletClient: null,
  createSubOrg: async () => {},
  addWalletAuthenticator: async () => {},
  setWallet: () => {},
  signInWithWallet: async () => {},
});

export const useTurnkey = () => useContext(TurnkeyContext);

interface TurnkeyProviderProps {
  children: React.ReactNode;
}

const clientConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
};

export const TurnkeyProvider: React.FC<TurnkeyProviderProps> = ({
  children,
}) => {
  const { signMessage, publicKey } = useWallet();
  const [wallet, setWallet] = useState<WalletInterface | null>(null);
  const [client, setClient] = useState<TurnkeyClient | null>(null);
  const [passkeyClient, setPasskeyClient] = useState<TurnkeyClient | null>(
    null
  );
  const [walletClient, setWalletClient] = useState<TurnkeyClient | null>(null);

  const createTurnkeyClient = async (stamper: TStamper) => {
    const { TurnkeyClient } = await import("@turnkey/http");

    return new TurnkeyClient(clientConfig, stamper);
  };

  useEffect(() => {
    if (wallet) {
      createTurnkeyClient(new WalletStamper(wallet)).then(setWalletClient);
    }
  }, [wallet]);

  useEffect(() => {
    const initPasskeyClient = async () => {
      const webauthnStamper = await createWebauthnStamper({
        rpId: "localhost",
      });
      createTurnkeyClient(webauthnStamper as TStamper).then(setPasskeyClient);
    };
    initPasskeyClient();
  }, []);

  async function createSubOrg(
    email: Email,
    chainType: ChainType = ChainType.SOLANA
  ) {
    if (chainType === ChainType.SOLANA) {
      const solanaWallet = wallet as SolanaWalletInterface;
      solanaWallet.recoverPublicKey();
    } else if (chainType === ChainType.EVM) {
      const evmWallet = wallet as EvmWalletInterface;
    }

    const { challenge, attestation } = await registerPassKey(email);

    const res = await createUserSubOrg({
      email,
      challenge,
      attestation,
      chainType,
    });

    console.log("Response from createUserSubOrg:", res);
  }

  async function addWalletAuthenticator(email: Email) {
    if (publicKey) {
      const decodedPublicKey = Buffer.from(publicKey?.toBuffer()).toString(
        "hex"
      );
      const res = await passkeyClient?.createApiKeys({
        type: "ACTIVITY_TYPE_CREATE_API_KEYS_V2",
        timestampMs: new Date().getTime().toString(),
        organizationId: "f45c3014-e68c-40e2-a9a3-f4a36d5a0251",
        parameters: {
          apiKeys: [
            {
              apiKeyName: "wallet-authenticator",
              publicKey: decodedPublicKey,
              //@ts-ignore
              curveType: "API_KEY_CURVE_ED25519",
            },
          ],
          userId: "ac81ee4d-0a57-443b-a582-33cd2d7dd1ae",
        },
      });
      console.log({ res });
    }
  }

  async function signInWithWallet(email: Email) {
    if (walletClient) {
      const wallets = await walletClient?.getWallets({
        organizationId: "f45c3014-e68c-40e2-a9a3-f4a36d5a0251",
      });
      console.log({ wallets });
    }
    return Promise.resolve();
  }

  return (
    <TurnkeyContext.Provider
      value={{
        client,
        passkeyClient,
        walletClient,
        createSubOrg,
        addWalletAuthenticator,
        setWallet,
        signInWithWallet,
      }}
    >
      {children}
    </TurnkeyContext.Provider>
  );
};
