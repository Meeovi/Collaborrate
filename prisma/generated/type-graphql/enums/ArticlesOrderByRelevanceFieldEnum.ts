import * as TypeGraphQL from "type-graphql";

export enum ArticlesOrderByRelevanceFieldEnum {
  name = "name",
  excerpt = "excerpt",
  content = "content",
  image = "image",
  categories = "categories",
  customers = "customers",
  users = "users",
  published = "published",
  isPublic = "isPublic",
  meta_description = "meta_description",
  meta_name = "meta_name",
  meta_url = "meta_url",
  tags = "tags"
}
TypeGraphQL.registerEnumType(ArticlesOrderByRelevanceFieldEnum, {
  name: "ArticlesOrderByRelevanceFieldEnum",
  description: undefined,
});
