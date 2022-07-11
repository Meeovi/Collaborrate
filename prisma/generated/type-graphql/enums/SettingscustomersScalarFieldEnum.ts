import * as TypeGraphQL from "type-graphql";

export enum SettingscustomersScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  login_as_customer = "login_as_customer",
  share_customer_accounts = "share_customer_accounts",
  online_minutes_interval = "online_minutes_interval",
  customer_data_lifetime = "customer_data_lifetime",
  email_after_registration = "email_after_registration"
}
TypeGraphQL.registerEnumType(SettingscustomersScalarFieldEnum, {
  name: "SettingscustomersScalarFieldEnum",
  description: undefined,
});
