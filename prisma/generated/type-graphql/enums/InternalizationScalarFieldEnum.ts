import * as TypeGraphQL from "type-graphql";

export enum InternalizationScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  region = "region",
  description = "description",
  "default" = "default",
  website = "website"
}
TypeGraphQL.registerEnumType(InternalizationScalarFieldEnum, {
  name: "InternalizationScalarFieldEnum",
  description: undefined,
});
