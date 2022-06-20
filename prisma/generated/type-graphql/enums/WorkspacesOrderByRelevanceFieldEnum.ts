import * as TypeGraphQL from "type-graphql";

export enum WorkspacesOrderByRelevanceFieldEnum {
  code = "code",
  name = "name",
  description = "description",
  author = "author",
  media = "media"
}
TypeGraphQL.registerEnumType(WorkspacesOrderByRelevanceFieldEnum, {
  name: "WorkspacesOrderByRelevanceFieldEnum",
  description: undefined,
});
