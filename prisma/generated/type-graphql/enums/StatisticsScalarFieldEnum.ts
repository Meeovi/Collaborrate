import * as TypeGraphQL from "type-graphql";

export enum StatisticsScalarFieldEnum {
  id = "id",
  name = "name",
  excerpt = "excerpt",
  description = "description",
  image = "image",
  published = "published",
  special_offers = "special_offers",
  reports = "reports",
  rewards = "rewards",
  coupons = "coupons",
  expiration = "expiration",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users"
}
TypeGraphQL.registerEnumType(StatisticsScalarFieldEnum, {
  name: "StatisticsScalarFieldEnum",
  description: undefined,
});
