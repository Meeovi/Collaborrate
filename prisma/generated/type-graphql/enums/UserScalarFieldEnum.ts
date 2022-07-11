import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  objectId = "objectId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  username = "username",
  email = "email",
  emailVerified = "emailVerified",
  authData = "authData",
  rperm = "rperm",
  wperm = "wperm",
  hashed_password = "hashed_password",
  email_verify_token_expires_at = "email_verify_token_expires_at",
  email_verify_token = "email_verify_token",
  account_lockout_expires_at = "account_lockout_expires_at",
  failed_login_count = "failed_login_count",
  perishable_token = "perishable_token",
  perishable_token_expires_at = "perishable_token_expires_at",
  password_changed_at = "password_changed_at",
  password_history = "password_history"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
