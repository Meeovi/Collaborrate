import * as TypeGraphQL from "type-graphql";

export enum PermissionsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  content = "content",
  role = "role",
  create = "create",
  read = "read",
  update = "update",
  "delete" = "delete",
  users = "users"
}
TypeGraphQL.registerEnumType(PermissionsScalarFieldEnum, {
  name: "PermissionsScalarFieldEnum",
  description: undefined,
});
