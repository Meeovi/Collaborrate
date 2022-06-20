import * as TypeGraphQL from "type-graphql";

export enum TagsOrderByRelevanceFieldEnum {
  name = "name",
  excerpt = "excerpt",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users"
}
TypeGraphQL.registerEnumType(TagsOrderByRelevanceFieldEnum, {
  name: "TagsOrderByRelevanceFieldEnum",
  description: undefined,
});
