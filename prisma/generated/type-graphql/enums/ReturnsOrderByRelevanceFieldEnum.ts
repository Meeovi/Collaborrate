import * as TypeGraphQL from "type-graphql";

export enum ReturnsOrderByRelevanceFieldEnum {
  name = "name",
  validity = "validity",
  return_prefix = "return_prefix"
}
TypeGraphQL.registerEnumType(ReturnsOrderByRelevanceFieldEnum, {
  name: "ReturnsOrderByRelevanceFieldEnum",
  description: undefined,
});
