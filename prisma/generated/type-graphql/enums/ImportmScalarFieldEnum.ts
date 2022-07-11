import * as TypeGraphQL from "type-graphql";

export enum ImportmScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  description = "description",
  file = "file",
  url = "url",
  image = "image"
}
TypeGraphQL.registerEnumType(ImportmScalarFieldEnum, {
  name: "ImportmScalarFieldEnum",
  description: undefined,
});
