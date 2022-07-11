import * as TypeGraphQL from "type-graphql";

export enum CategoriesOrderByRelevanceFieldEnum {
  thumbnail = "thumbnail",
  name = "name",
  visibility = "visibility",
  websites = "websites",
  product = "product",
  country = "country",
  description = "description",
  content = "content",
  image = "image",
  meta_title = "meta_title",
  meta_keywords = "meta_keywords",
  meta_description = "meta_description",
  meta_url = "meta_url"
}
TypeGraphQL.registerEnumType(CategoriesOrderByRelevanceFieldEnum, {
  name: "CategoriesOrderByRelevanceFieldEnum",
  description: undefined,
});
