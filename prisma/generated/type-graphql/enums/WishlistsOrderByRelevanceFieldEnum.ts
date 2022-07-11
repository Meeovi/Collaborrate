import * as TypeGraphQL from "type-graphql";

export enum WishlistsOrderByRelevanceFieldEnum {
  name = "name",
  customers = "customers",
  visibility = "visibility",
  products = "products",
  quantity = "quantity"
}
TypeGraphQL.registerEnumType(WishlistsOrderByRelevanceFieldEnum, {
  name: "WishlistsOrderByRelevanceFieldEnum",
  description: undefined,
});
