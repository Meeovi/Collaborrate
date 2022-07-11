import * as TypeGraphQL from "type-graphql";

export enum IdempotencyScalarFieldEnum {
  objectId = "objectId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  reqId = "reqId",
  expire = "expire",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(IdempotencyScalarFieldEnum, {
  name: "IdempotencyScalarFieldEnum",
  description: undefined,
});
