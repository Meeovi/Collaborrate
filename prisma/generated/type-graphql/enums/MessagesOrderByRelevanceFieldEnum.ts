import * as TypeGraphQL from "type-graphql";

export enum MessagesOrderByRelevanceFieldEnum {
  from = "from",
  subject = "subject",
  content = "content",
  sender = "sender",
  media = "media"
}
TypeGraphQL.registerEnumType(MessagesOrderByRelevanceFieldEnum, {
  name: "MessagesOrderByRelevanceFieldEnum",
  description: undefined,
});
