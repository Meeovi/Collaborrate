import * as TypeGraphQL from "type-graphql";

export enum PermissionsOrderByRelevanceFieldEnum {
  name = "name",
  content = "content",
  role = "role",
  create = "create",
  read = "read",
  update = "update",
  "delete" = "delete",
  users = "users"
}
TypeGraphQL.registerEnumType(PermissionsOrderByRelevanceFieldEnum, {
  name: "PermissionsOrderByRelevanceFieldEnum",
  description: undefined,
});
