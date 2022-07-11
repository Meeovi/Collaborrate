import * as TypeGraphQL from "type-graphql";

export enum CouponsScalarFieldEnum {
  id = "id",
  name = "name",
  excerpt = "excerpt",
  discount = "discount",
  image = "image",
  published = "published",
  expiration = "expiration",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users",
  prod_id = "prod_id"
}
TypeGraphQL.registerEnumType(CouponsScalarFieldEnum, {
  name: "CouponsScalarFieldEnum",
  description: undefined,
});
