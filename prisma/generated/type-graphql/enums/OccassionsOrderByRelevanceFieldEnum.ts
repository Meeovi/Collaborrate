import * as TypeGraphQL from "type-graphql";

export enum OccassionsOrderByRelevanceFieldEnum {
  code = "code",
  name = "name",
  category = "category",
  tags = "tags",
  description = "description"
}
TypeGraphQL.registerEnumType(OccassionsOrderByRelevanceFieldEnum, {
  name: "OccassionsOrderByRelevanceFieldEnum",
  description: undefined,
});
