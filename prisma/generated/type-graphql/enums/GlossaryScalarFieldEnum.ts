import * as TypeGraphQL from "type-graphql";

export enum GlossaryScalarFieldEnum {
  id = "id",
  name = "name",
  content = "content",
  image = "image",
  published = "published"
}
TypeGraphQL.registerEnumType(GlossaryScalarFieldEnum, {
  name: "GlossaryScalarFieldEnum",
  description: undefined,
});
