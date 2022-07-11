import * as TypeGraphQL from "type-graphql";

export enum WebsitesOrderByRelevanceFieldEnum {
  name = "name",
  url = "url",
  shop = "shop",
  store = "store"
}
TypeGraphQL.registerEnumType(WebsitesOrderByRelevanceFieldEnum, {
  name: "WebsitesOrderByRelevanceFieldEnum",
  description: undefined,
});
