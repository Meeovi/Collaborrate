import * as TypeGraphQL from "type-graphql";

export enum PluginsOrderByRelevanceFieldEnum {
  name = "name",
  url = "url",
  github_link = "github_link",
  description = "description",
  logo = "logo",
  screenshots = "screenshots",
  publisher_name = "publisher_name",
  publisher_email = "publisher_email"
}
TypeGraphQL.registerEnumType(PluginsOrderByRelevanceFieldEnum, {
  name: "PluginsOrderByRelevanceFieldEnum",
  description: undefined,
});
