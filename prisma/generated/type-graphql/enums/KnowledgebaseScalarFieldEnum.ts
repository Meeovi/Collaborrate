import * as TypeGraphQL from "type-graphql";

export enum KnowledgebaseScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  status = "status",
  revision = "revision",
  content = "content",
  resolution = "resolution",
  author = "author",
  approver = "approver",
  date_modified = "date_modified"
}
TypeGraphQL.registerEnumType(KnowledgebaseScalarFieldEnum, {
  name: "KnowledgebaseScalarFieldEnum",
  description: undefined,
});
