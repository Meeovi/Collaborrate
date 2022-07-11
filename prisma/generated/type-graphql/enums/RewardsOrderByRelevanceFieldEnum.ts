import * as TypeGraphQL from "type-graphql";

export enum RewardsOrderByRelevanceFieldEnum {
  name = "name",
  slug = "slug",
  level = "level",
  coupons = "coupons",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users"
}
TypeGraphQL.registerEnumType(RewardsOrderByRelevanceFieldEnum, {
  name: "RewardsOrderByRelevanceFieldEnum",
  description: undefined,
});
