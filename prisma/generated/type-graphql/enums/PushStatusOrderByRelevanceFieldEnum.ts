import * as TypeGraphQL from "type-graphql";

export enum PushStatusOrderByRelevanceFieldEnum {
  objectId = "objectId",
  pushTime = "pushTime",
  source = "source",
  query = "query",
  payload = "payload",
  title = "title",
  status = "status",
  pushHash = "pushHash",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(PushStatusOrderByRelevanceFieldEnum, {
  name: "PushStatusOrderByRelevanceFieldEnum",
  description: undefined,
});
