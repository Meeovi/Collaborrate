import * as TypeGraphQL from "type-graphql";

export enum WebsitesScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  url = "url",
  shop = "shop",
  store = "store"
}
TypeGraphQL.registerEnumType(WebsitesScalarFieldEnum, {
  name: "WebsitesScalarFieldEnum",
  description: undefined,
});
