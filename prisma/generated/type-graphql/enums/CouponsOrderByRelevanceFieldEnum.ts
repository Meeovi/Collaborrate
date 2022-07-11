import * as TypeGraphQL from "type-graphql";

export enum CouponsOrderByRelevanceFieldEnum {
  name = "name",
  excerpt = "excerpt",
  discount = "discount",
  image = "image",
  expiration = "expiration",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users"
}
TypeGraphQL.registerEnumType(CouponsOrderByRelevanceFieldEnum, {
  name: "CouponsOrderByRelevanceFieldEnum",
  description: undefined,
});
