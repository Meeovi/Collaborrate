import * as TypeGraphQL from "type-graphql";

export enum KnowledgebaseOrderByRelevanceFieldEnum {
  name = "name",
  status = "status",
  revision = "revision",
  content = "content",
  resolution = "resolution",
  author = "author",
  approver = "approver"
}
TypeGraphQL.registerEnumType(KnowledgebaseOrderByRelevanceFieldEnum, {
  name: "KnowledgebaseOrderByRelevanceFieldEnum",
  description: undefined,
});
