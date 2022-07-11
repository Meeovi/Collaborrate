import * as TypeGraphQL from "type-graphql";

export enum Shop_settingsOrderByRelevanceFieldEnum {
  store_name = "store_name",
  store_phone = "store_phone",
  store_hours = "store_hours",
  country = "country",
  region = "region",
  zipcode = "zipcode",
  city = "city",
  address = "address",
  address_two = "address_two",
  vat_number = "vat_number",
  allow_state = "allow_state",
  state_required_for = "state_required_for",
  allow_countries = "allow_countries",
  default_country = "default_country",
  optional_zip = "optional_zip",
  european_union_countries = "european_union_countries",
  top_destinations = "top_destinations",
  base_currency = "base_currency",
  default_currency = "default_currency",
  allowed_currency = "allowed_currency"
}
TypeGraphQL.registerEnumType(Shop_settingsOrderByRelevanceFieldEnum, {
  name: "Shop_settingsOrderByRelevanceFieldEnum",
  description: undefined,
});
