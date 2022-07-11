import * as TypeGraphQL from "type-graphql";

export enum WebhooksScalarFieldEnum {
  id = "id",
  created_at = "created_at",
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
TypeGraphQL.registerEnumType(WebhooksScalarFieldEnum, {
  name: "WebhooksScalarFieldEnum",
  description: undefined,
});
