import * as TypeGraphQL from "type-graphql";

export enum GlossaryOrderByRelevanceFieldEnum {
  name = "name",
  content = "content",
  image = "image"
}
TypeGraphQL.registerEnumType(GlossaryOrderByRelevanceFieldEnum, {
  name: "GlossaryOrderByRelevanceFieldEnum",
  description: undefined,
});
