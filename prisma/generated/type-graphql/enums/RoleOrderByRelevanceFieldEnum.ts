import * as TypeGraphQL from "type-graphql";

export enum RoleOrderByRelevanceFieldEnum {
  objectId = "objectId",
  name = "name",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(RoleOrderByRelevanceFieldEnum, {
  name: "RoleOrderByRelevanceFieldEnum",
  description: undefined,
});
