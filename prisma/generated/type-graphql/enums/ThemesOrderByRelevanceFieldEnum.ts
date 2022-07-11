import * as TypeGraphQL from "type-graphql";

export enum ThemesOrderByRelevanceFieldEnum {
  title = "title",
  parent_theme = "parent_theme",
  theme_path = "theme_path",
  action = "action"
}
TypeGraphQL.registerEnumType(ThemesOrderByRelevanceFieldEnum, {
  name: "ThemesOrderByRelevanceFieldEnum",
  description: undefined,
});
