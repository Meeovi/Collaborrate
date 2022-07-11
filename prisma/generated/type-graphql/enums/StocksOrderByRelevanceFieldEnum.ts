import * as TypeGraphQL from "type-graphql";

export enum StocksOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  website = "website",
  sources = "sources"
}
TypeGraphQL.registerEnumType(StocksOrderByRelevanceFieldEnum, {
  name: "StocksOrderByRelevanceFieldEnum",
  description: undefined,
});
