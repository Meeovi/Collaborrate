import * as TypeGraphQL from "type-graphql";

export enum Content_typeOrderByRelevanceFieldEnum {
  text = "text",
  link = "link",
  email = "email",
  uid = "uid",
  rich_text = "rich_text",
  password = "password",
  media = "media",
  database_name = "database_name"
}
TypeGraphQL.registerEnumType(Content_typeOrderByRelevanceFieldEnum, {
  name: "Content_typeOrderByRelevanceFieldEnum",
  description: undefined,
});
