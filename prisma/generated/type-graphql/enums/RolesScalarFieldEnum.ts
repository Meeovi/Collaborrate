import * as TypeGraphQL from "type-graphql";

export enum RolesScalarFieldEnum {
  id = "id",
  role_name = "role_name",
  content = "content",
  created_at = "created_at"
}
TypeGraphQL.registerEnumType(RolesScalarFieldEnum, {
  name: "RolesScalarFieldEnum",
  description: undefined,
});
