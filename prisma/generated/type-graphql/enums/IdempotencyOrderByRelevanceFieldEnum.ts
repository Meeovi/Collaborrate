import * as TypeGraphQL from "type-graphql";

export enum IdempotencyOrderByRelevanceFieldEnum {
  objectId = "objectId",
  reqId = "reqId",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(IdempotencyOrderByRelevanceFieldEnum, {
  name: "IdempotencyOrderByRelevanceFieldEnum",
  description: undefined,
});
