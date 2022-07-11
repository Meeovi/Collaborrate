import * as TypeGraphQL from "type-graphql";

export enum PagesScalarFieldEnum {
  id = "id",
  enable_page = "enable_page",
  title = "title",
  content_title = "content_title",
  content = "content",
  url_key = "url_key",
  meta_title = "meta_title",
  meta_keywords = "meta_keywords",
  meta_description = "meta_description"
}
TypeGraphQL.registerEnumType(PagesScalarFieldEnum, {
  name: "PagesScalarFieldEnum",
  description: undefined,
});
