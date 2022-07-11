import * as TypeGraphQL from "type-graphql";

export enum AudienceOrderByRelevanceFieldEnum {
  objectId = "objectId",
  name = "name",
  query = "query",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(AudienceOrderByRelevanceFieldEnum, {
  name: "AudienceOrderByRelevanceFieldEnum",
  description: undefined,
});
