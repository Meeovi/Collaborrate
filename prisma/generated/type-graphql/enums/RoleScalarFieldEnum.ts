import * as TypeGraphQL from "type-graphql";

export enum RoleScalarFieldEnum {
  objectId = "objectId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(RoleScalarFieldEnum, {
  name: "RoleScalarFieldEnum",
  description: undefined,
});
