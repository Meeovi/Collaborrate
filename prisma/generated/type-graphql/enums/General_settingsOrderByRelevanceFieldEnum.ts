import * as TypeGraphQL from "type-graphql";

export enum General_settingsOrderByRelevanceFieldEnum {
  title = "title",
  tagline = "tagline",
  url = "url",
  email = "email",
  access_restrictions = "access_restrictions",
  restriction_mode = "restriction_mode",
  startup_page = "startup_page",
  landing_page = "landing_page",
  http_response = "http_response",
  store_email = "store_email",
  store_contact = "store_contact",
  store_contact_two = "store_contact_two",
  customer_support = "customer_support"
}
TypeGraphQL.registerEnumType(General_settingsOrderByRelevanceFieldEnum, {
  name: "General_settingsOrderByRelevanceFieldEnum",
  description: undefined,
});
