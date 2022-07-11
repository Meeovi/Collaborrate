import * as TypeGraphQL from "type-graphql";

export enum FullfillmentsOrderByRelevanceFieldEnum {
  name = "name",
  shipping_zones = "shipping_zones",
  company = "company",
  address = "address",
  address_two = "address_two",
  city = "city",
  state = "state",
  zipcode = "zipcode",
  country = "country",
  country_area = "country_area",
  phone = "phone",
  pickup = "pickup",
  stock = "stock"
}
TypeGraphQL.registerEnumType(FullfillmentsOrderByRelevanceFieldEnum, {
  name: "FullfillmentsOrderByRelevanceFieldEnum",
  description: undefined,
});
