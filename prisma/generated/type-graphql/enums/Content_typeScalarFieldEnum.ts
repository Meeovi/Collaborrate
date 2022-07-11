import * as TypeGraphQL from "type-graphql";

export enum Content_typeScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  text = "text",
  number = "number",
  json = "json",
  link = "link",
  email = "email",
  uid = "uid",
  date = "date",
  time = "time",
  timestamp = "timestamp",
  boolean = "boolean",
  rich_text = "rich_text",
  password = "password",
  media = "media",
  database_name = "database_name"
}
TypeGraphQL.registerEnumType(Content_typeScalarFieldEnum, {
  name: "Content_typeScalarFieldEnum",
  description: undefined,
});
