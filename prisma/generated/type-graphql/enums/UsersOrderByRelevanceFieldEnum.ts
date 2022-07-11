import * as TypeGraphQL from "type-graphql";

export enum UsersOrderByRelevanceFieldEnum {
  username = "username",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  password = "password",
  interface_locale = "interface_locale",
  value = "value",
  permissions = "permissions"
}
TypeGraphQL.registerEnumType(UsersOrderByRelevanceFieldEnum, {
  name: "UsersOrderByRelevanceFieldEnum",
  description: undefined,
});
