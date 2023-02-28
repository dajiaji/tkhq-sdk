/* @generated by `@turnkey/fetchers`. DO NOT EDIT BY HAND */

import { request } from "../../../../../base";
import type { operations } from "./public_api.types";

/** `POST /public/v1/query/get_activity` */
type TPostGetActivityBody =
  operations["PublicApiService_GetActivity"]["parameters"]["body"]["body"];

/** `POST /public/v1/query/get_activity` */
export type TPostGetActivityResponse =
  operations["PublicApiService_GetActivity"]["responses"]["200"]["schema"];

/** `POST /public/v1/query/get_activity` */
export type TPostGetActivityInput = { body: TPostGetActivityBody };

/** `POST /public/v1/query/get_activity` */
export const postGetActivity = (input: TPostGetActivityInput) =>
  request<TPostGetActivityResponse, TPostGetActivityBody, never, never, never>({
    uri: "/public/v1/query/get_activity",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/query/get_organization` */
type TPostGetOrganizationBody =
  operations["PublicApiService_GetOrganization"]["parameters"]["body"]["body"];

/** `POST /public/v1/query/get_organization` */
export type TPostGetOrganizationResponse =
  operations["PublicApiService_GetOrganization"]["responses"]["200"]["schema"];

/** `POST /public/v1/query/get_organization` */
export type TPostGetOrganizationInput = { body: TPostGetOrganizationBody };

/** `POST /public/v1/query/get_organization` */
export const postGetOrganization = (input: TPostGetOrganizationInput) =>
  request<
    TPostGetOrganizationResponse,
    TPostGetOrganizationBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/query/get_organization",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/query/get_policy` */
type TPostGetPolicyBody =
  operations["PublicApiService_GetPolicy"]["parameters"]["body"]["body"];

/** `POST /public/v1/query/get_policy` */
export type TPostGetPolicyResponse =
  operations["PublicApiService_GetPolicy"]["responses"]["200"]["schema"];

/** `POST /public/v1/query/get_policy` */
export type TPostGetPolicyInput = { body: TPostGetPolicyBody };

/** `POST /public/v1/query/get_policy` */
export const postGetPolicy = (input: TPostGetPolicyInput) =>
  request<TPostGetPolicyResponse, TPostGetPolicyBody, never, never, never>({
    uri: "/public/v1/query/get_policy",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/query/get_user` */
type TPostGetUserBody =
  operations["PublicApiService_GetUser"]["parameters"]["body"]["body"];

/** `POST /public/v1/query/get_user` */
export type TPostGetUserResponse =
  operations["PublicApiService_GetUser"]["responses"]["200"]["schema"];

/** `POST /public/v1/query/get_user` */
export type TPostGetUserInput = { body: TPostGetUserBody };

/** `POST /public/v1/query/get_user` */
export const postGetUser = (input: TPostGetUserInput) =>
  request<TPostGetUserResponse, TPostGetUserBody, never, never, never>({
    uri: "/public/v1/query/get_user",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/query/list_activities` */
type TPostGetActivitiesBody =
  operations["PublicApiService_GetActivities"]["parameters"]["body"]["body"];

/** `POST /public/v1/query/list_activities` */
export type TPostGetActivitiesResponse =
  operations["PublicApiService_GetActivities"]["responses"]["200"]["schema"];

/** `POST /public/v1/query/list_activities` */
export type TPostGetActivitiesInput = { body: TPostGetActivitiesBody };

/** `POST /public/v1/query/list_activities` */
export const postGetActivities = (input: TPostGetActivitiesInput) =>
  request<
    TPostGetActivitiesResponse,
    TPostGetActivitiesBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/query/list_activities",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/query/list_policies` */
type TPostGetPoliciesBody =
  operations["PublicApiService_GetPolicies"]["parameters"]["body"]["body"];

/** `POST /public/v1/query/list_policies` */
export type TPostGetPoliciesResponse =
  operations["PublicApiService_GetPolicies"]["responses"]["200"]["schema"];

/** `POST /public/v1/query/list_policies` */
export type TPostGetPoliciesInput = { body: TPostGetPoliciesBody };

/** `POST /public/v1/query/list_policies` */
export const postGetPolicies = (input: TPostGetPoliciesInput) =>
  request<TPostGetPoliciesResponse, TPostGetPoliciesBody, never, never, never>({
    uri: "/public/v1/query/list_policies",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/query/list_private_keys` */
type TPostGetPrivateKeysBody =
  operations["PublicApiService_GetPrivateKeys"]["parameters"]["body"]["body"];

/** `POST /public/v1/query/list_private_keys` */
export type TPostGetPrivateKeysResponse =
  operations["PublicApiService_GetPrivateKeys"]["responses"]["200"]["schema"];

/** `POST /public/v1/query/list_private_keys` */
export type TPostGetPrivateKeysInput = { body: TPostGetPrivateKeysBody };

/** `POST /public/v1/query/list_private_keys` */
export const postGetPrivateKeys = (input: TPostGetPrivateKeysInput) =>
  request<
    TPostGetPrivateKeysResponse,
    TPostGetPrivateKeysBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/query/list_private_keys",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/query/list_users` */
type TPostGetUsersBody =
  operations["PublicApiService_GetUsers"]["parameters"]["body"]["body"];

/** `POST /public/v1/query/list_users` */
export type TPostGetUsersResponse =
  operations["PublicApiService_GetUsers"]["responses"]["200"]["schema"];

/** `POST /public/v1/query/list_users` */
export type TPostGetUsersInput = { body: TPostGetUsersBody };

/** `POST /public/v1/query/list_users` */
export const postGetUsers = (input: TPostGetUsersInput) =>
  request<TPostGetUsersResponse, TPostGetUsersBody, never, never, never>({
    uri: "/public/v1/query/list_users",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/query/whoami` */
type TPostGetWhoamiBody =
  operations["PublicApiService_GetWhoami"]["parameters"]["body"]["body"];

/** `POST /public/v1/query/whoami` */
export type TPostGetWhoamiResponse =
  operations["PublicApiService_GetWhoami"]["responses"]["200"]["schema"];

/** `POST /public/v1/query/whoami` */
export type TPostGetWhoamiInput = { body: TPostGetWhoamiBody };

/** `POST /public/v1/query/whoami` */
export const postGetWhoami = (input: TPostGetWhoamiInput) =>
  request<TPostGetWhoamiResponse, TPostGetWhoamiBody, never, never, never>({
    uri: "/public/v1/query/whoami",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/submit/create_api_keys` */
type TPostCreateApiKeysBody =
  operations["PublicApiService_CreateApiKeys"]["parameters"]["body"]["body"];

/** `POST /public/v1/submit/create_api_keys` */
export type TPostCreateApiKeysResponse =
  operations["PublicApiService_CreateApiKeys"]["responses"]["200"]["schema"];

/** `POST /public/v1/submit/create_api_keys` */
export type TPostCreateApiKeysInput = { body: TPostCreateApiKeysBody };

/** `POST /public/v1/submit/create_api_keys` */
export const postCreateApiKeys = (input: TPostCreateApiKeysInput) =>
  request<
    TPostCreateApiKeysResponse,
    TPostCreateApiKeysBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/submit/create_api_keys",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/submit/create_invitations` */
type TPostCreateInvitationsBody =
  operations["PublicApiService_CreateInvitations"]["parameters"]["body"]["body"];

/** `POST /public/v1/submit/create_invitations` */
export type TPostCreateInvitationsResponse =
  operations["PublicApiService_CreateInvitations"]["responses"]["200"]["schema"];

/** `POST /public/v1/submit/create_invitations` */
export type TPostCreateInvitationsInput = { body: TPostCreateInvitationsBody };

/** `POST /public/v1/submit/create_invitations` */
export const postCreateInvitations = (input: TPostCreateInvitationsInput) =>
  request<
    TPostCreateInvitationsResponse,
    TPostCreateInvitationsBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/submit/create_invitations",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/submit/create_policy` */
type TPostCreatePolicyBody =
  operations["PublicApiService_CreatePolicy"]["parameters"]["body"]["body"];

/** `POST /public/v1/submit/create_policy` */
export type TPostCreatePolicyResponse =
  operations["PublicApiService_CreatePolicy"]["responses"]["200"]["schema"];

/** `POST /public/v1/submit/create_policy` */
export type TPostCreatePolicyInput = { body: TPostCreatePolicyBody };

/** `POST /public/v1/submit/create_policy` */
export const postCreatePolicy = (input: TPostCreatePolicyInput) =>
  request<
    TPostCreatePolicyResponse,
    TPostCreatePolicyBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/submit/create_policy",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/submit/create_private_keys` */
type TPostCreatePrivateKeysBody =
  operations["PublicApiService_CreatePrivateKeys"]["parameters"]["body"]["body"];

/** `POST /public/v1/submit/create_private_keys` */
export type TPostCreatePrivateKeysResponse =
  operations["PublicApiService_CreatePrivateKeys"]["responses"]["200"]["schema"];

/** `POST /public/v1/submit/create_private_keys` */
export type TPostCreatePrivateKeysInput = { body: TPostCreatePrivateKeysBody };

/** `POST /public/v1/submit/create_private_keys` */
export const postCreatePrivateKeys = (input: TPostCreatePrivateKeysInput) =>
  request<
    TPostCreatePrivateKeysResponse,
    TPostCreatePrivateKeysBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/submit/create_private_keys",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/submit/delete_api_keys` */
type TPostDeleteApiKeysBody =
  operations["PublicApiService_DeleteApiKeys"]["parameters"]["body"]["body"];

/** `POST /public/v1/submit/delete_api_keys` */
export type TPostDeleteApiKeysResponse =
  operations["PublicApiService_DeleteApiKeys"]["responses"]["200"]["schema"];

/** `POST /public/v1/submit/delete_api_keys` */
export type TPostDeleteApiKeysInput = { body: TPostDeleteApiKeysBody };

/** `POST /public/v1/submit/delete_api_keys` */
export const postDeleteApiKeys = (input: TPostDeleteApiKeysInput) =>
  request<
    TPostDeleteApiKeysResponse,
    TPostDeleteApiKeysBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/submit/delete_api_keys",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/submit/delete_invitations` */
type TPostDeleteInvitationBody =
  operations["PublicApiService_DeleteInvitation"]["parameters"]["body"]["body"];

/** `POST /public/v1/submit/delete_invitations` */
export type TPostDeleteInvitationResponse =
  operations["PublicApiService_DeleteInvitation"]["responses"]["200"]["schema"];

/** `POST /public/v1/submit/delete_invitations` */
export type TPostDeleteInvitationInput = { body: TPostDeleteInvitationBody };

/** `POST /public/v1/submit/delete_invitations` */
export const postDeleteInvitation = (input: TPostDeleteInvitationInput) =>
  request<
    TPostDeleteInvitationResponse,
    TPostDeleteInvitationBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/submit/delete_invitations",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/submit/delete_policy` */
type TPostDeletePolicyBody =
  operations["PublicApiService_DeletePolicy"]["parameters"]["body"]["body"];

/** `POST /public/v1/submit/delete_policy` */
export type TPostDeletePolicyResponse =
  operations["PublicApiService_DeletePolicy"]["responses"]["200"]["schema"];

/** `POST /public/v1/submit/delete_policy` */
export type TPostDeletePolicyInput = { body: TPostDeletePolicyBody };

/** `POST /public/v1/submit/delete_policy` */
export const postDeletePolicy = (input: TPostDeletePolicyInput) =>
  request<
    TPostDeletePolicyResponse,
    TPostDeletePolicyBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/submit/delete_policy",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/submit/sign_raw_payload` */
type TPostSignRawPayloadBody =
  operations["PublicApiService_SignRawPayload"]["parameters"]["body"]["body"];

/** `POST /public/v1/submit/sign_raw_payload` */
export type TPostSignRawPayloadResponse =
  operations["PublicApiService_SignRawPayload"]["responses"]["200"]["schema"];

/** `POST /public/v1/submit/sign_raw_payload` */
export type TPostSignRawPayloadInput = { body: TPostSignRawPayloadBody };

/** `POST /public/v1/submit/sign_raw_payload` */
export const postSignRawPayload = (input: TPostSignRawPayloadInput) =>
  request<
    TPostSignRawPayloadResponse,
    TPostSignRawPayloadBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/submit/sign_raw_payload",
    method: "POST",
    body: input.body,
  });

/** `POST /public/v1/submit/sign_transaction` */
type TPostSignTransactionBody =
  operations["PublicApiService_SignTransaction"]["parameters"]["body"]["body"];

/** `POST /public/v1/submit/sign_transaction` */
export type TPostSignTransactionResponse =
  operations["PublicApiService_SignTransaction"]["responses"]["200"]["schema"];

/** `POST /public/v1/submit/sign_transaction` */
export type TPostSignTransactionInput = { body: TPostSignTransactionBody };

/** `POST /public/v1/submit/sign_transaction` */
export const postSignTransaction = (input: TPostSignTransactionInput) =>
  request<
    TPostSignTransactionResponse,
    TPostSignTransactionBody,
    never,
    never,
    never
  >({
    uri: "/public/v1/submit/sign_transaction",
    method: "POST",
    body: input.body,
  });

/** `POST /tkhq/public/v1/query/get_private_key` */
type TPostGetPrivateKeyBody =
  operations["PublicApiService_GetPrivateKey"]["parameters"]["body"]["body"];

/** `POST /tkhq/public/v1/query/get_private_key` */
export type TPostGetPrivateKeyResponse =
  operations["PublicApiService_GetPrivateKey"]["responses"]["200"]["schema"];

/** `POST /tkhq/public/v1/query/get_private_key` */
export type TPostGetPrivateKeyInput = { body: TPostGetPrivateKeyBody };

/** `POST /tkhq/public/v1/query/get_private_key` */
export const postGetPrivateKey = (input: TPostGetPrivateKeyInput) =>
  request<
    TPostGetPrivateKeyResponse,
    TPostGetPrivateKeyBody,
    never,
    never,
    never
  >({
    uri: "/tkhq/public/v1/query/get_private_key",
    method: "POST",
    body: input.body,
  });