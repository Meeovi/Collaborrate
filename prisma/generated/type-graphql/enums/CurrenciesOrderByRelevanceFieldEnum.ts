import * as TypeGraphQL from "type-graphql";

export enum CurrenciesOrderByRelevanceFieldEnum {
  code = "code",
  name = "name",
  region = "region"
}
TypeGraphQL.registerEnumType(CurrenciesOrderByRelevanceFieldEnum, {
  name: "CurrenciesOrderByRelevanceFieldEnum",
  description: undefined,
});
