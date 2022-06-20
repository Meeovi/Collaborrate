import * as TypeGraphQL from "type-graphql";

export enum Tax_rateOrderByRelevanceFieldEnum {
  tax_identifier = "tax_identifier",
  postcode = "postcode",
  state = "state",
  country = "country",
  rate_percent = "rate_percent",
  default_store_view = "default_store_view"
}
TypeGraphQL.registerEnumType(Tax_rateOrderByRelevanceFieldEnum, {
  name: "Tax_rateOrderByRelevanceFieldEnum",
  description: undefined,
});
