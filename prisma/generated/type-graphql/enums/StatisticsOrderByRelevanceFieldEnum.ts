import * as TypeGraphQL from "type-graphql";

export enum StatisticsOrderByRelevanceFieldEnum {
  name = "name",
  excerpt = "excerpt",
  description = "description",
  image = "image",
  special_offers = "special_offers",
  reports = "reports",
  rewards = "rewards",
  coupons = "coupons",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users"
}
TypeGraphQL.registerEnumType(StatisticsOrderByRelevanceFieldEnum, {
  name: "StatisticsOrderByRelevanceFieldEnum",
  description: undefined,
});
