import * as TypeGraphQL from "type-graphql";

export enum ThemesScalarFieldEnum {
  id = "id",
  title = "title",
  parent_theme = "parent_theme",
  theme_path = "theme_path",
  action = "action",
  website_id = "website_id"
}
TypeGraphQL.registerEnumType(ThemesScalarFieldEnum, {
  name: "ThemesScalarFieldEnum",
  description: undefined,
});
