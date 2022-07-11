import * as TypeGraphQL from "type-graphql";

export enum CountriesOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  image = "image",
  region = "region"
}
TypeGraphQL.registerEnumType(CountriesOrderByRelevanceFieldEnum, {
  name: "CountriesOrderByRelevanceFieldEnum",
  description: undefined,
});
