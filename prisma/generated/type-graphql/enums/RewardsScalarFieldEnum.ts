import * as TypeGraphQL from "type-graphql";

export enum RewardsScalarFieldEnum {
  id = "id",
  name = "name",
  slug = "slug",
  level = "level",
  created_at = "created_at",
  coupons = "coupons",
  expiration = "expiration",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users"
}
TypeGraphQL.registerEnumType(RewardsScalarFieldEnum, {
  name: "RewardsScalarFieldEnum",
  description: undefined,
});
