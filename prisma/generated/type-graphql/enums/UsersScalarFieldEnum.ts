import * as TypeGraphQL from "type-graphql";

export enum UsersScalarFieldEnum {
  id = "id",
  username = "username",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  password = "password",
  interface_locale = "interface_locale",
  value = "value",
  permissions = "permissions",
  created_at = "created_at"
}
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});
