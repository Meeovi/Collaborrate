import * as TypeGraphQL from "type-graphql";

export enum ZonesScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  updated_at = "updated_at",
  scope = "scope",
  type = "type",
  country = "country",
  code = "code"
}
TypeGraphQL.registerEnumType(ZonesScalarFieldEnum, {
  name: "ZonesScalarFieldEnum",
  description: undefined,
});
