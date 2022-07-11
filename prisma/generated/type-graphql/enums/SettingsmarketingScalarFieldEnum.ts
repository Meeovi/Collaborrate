import * as TypeGraphQL from "type-graphql";

export enum SettingsmarketingScalarFieldEnum {
  id = "id",
  mail_port = "mail_port",
  recaptcha_api = "recaptcha_api",
  adsense_api = "adsense_api",
  sitemap_url = "sitemap_url",
  customer_data_lifetime = "customer_data_lifetime",
  mail_server = "mail_server"
}
TypeGraphQL.registerEnumType(SettingsmarketingScalarFieldEnum, {
  name: "SettingsmarketingScalarFieldEnum",
  description: undefined,
});
