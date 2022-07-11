import * as TypeGraphQL from "type-graphql";

export enum ZonesOrderByRelevanceFieldEnum {
  name = "name",
  scope = "scope",
  type = "type",
  country = "country",
  code = "code"
}
TypeGraphQL.registerEnumType(ZonesOrderByRelevanceFieldEnum, {
  name: "ZonesOrderByRelevanceFieldEnum",
  description: undefined,
});
