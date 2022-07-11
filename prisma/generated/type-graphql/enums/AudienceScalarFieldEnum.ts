import * as TypeGraphQL from "type-graphql";

export enum AudienceScalarFieldEnum {
  objectId = "objectId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  query = "query",
  lastUsed = "lastUsed",
  timesUsed = "timesUsed",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(AudienceScalarFieldEnum, {
  name: "AudienceScalarFieldEnum",
  description: undefined,
});
