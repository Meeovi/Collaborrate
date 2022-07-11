import * as TypeGraphQL from "type-graphql";

export enum TagsScalarFieldEnum {
  id = "id",
  name = "name",
  excerpt = "excerpt",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users"
}
TypeGraphQL.registerEnumType(TagsScalarFieldEnum, {
  name: "TagsScalarFieldEnum",
  description: undefined,
});
