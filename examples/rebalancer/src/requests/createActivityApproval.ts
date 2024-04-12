import type { TurnkeyServerSDK } from "@turnkey/sdk-js-server";
import { TurnkeyActivityError } from "@turnkey/ethers";
import { refineNonNull } from "./utils";

export default async function approveActivity(
  turnkeyClient: TurnkeyServerSDK,
  activityId: string,
  activityFingerprint: string
): Promise<string> {
  try {
    const activity = await turnkeyClient.api().approveActivity({
      fingerprint: activityFingerprint,
    });

    const result = refineNonNull(activity);

    console.log('result', result);

    // Success!
    console.log(
      // TODO: consider altering this shape
      [`✅ Approved activity!`, `- Activity ID: ${result.id}`, ``].join("\n")
    );

    return activityId;
  } catch (error) {
    // If needed, you can read from `TurnkeyActivityError` to find out why the activity didn't succeed
    if (error instanceof TurnkeyActivityError) {
      throw error;
    }

    throw new TurnkeyActivityError({
      message: "Failed to approve activity",
      cause: error as Error,
    });
  }
}
