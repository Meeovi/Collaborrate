import * as TypeGraphQL from "type-graphql";

export enum WebhooksOrderByRelevanceFieldEnum {
  name = "name",
  url = "url",
  headers = "headers",
  create = "create",
  retrieve = "retrieve",
  update = "update",
  "delete" = "delete",
  publish = "publish",
  unpublish = "unpublish"
}
TypeGraphQL.registerEnumType(WebhooksOrderByRelevanceFieldEnum, {
  name: "WebhooksOrderByRelevanceFieldEnum",
  description: undefined,
});
