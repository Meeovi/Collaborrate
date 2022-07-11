import * as TypeGraphQL from "type-graphql";

export enum IntegrationsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  content = "content",
  media = "media",
  location = "location",
  category = "category"
}
TypeGraphQL.registerEnumType(IntegrationsScalarFieldEnum, {
  name: "IntegrationsScalarFieldEnum",
  description: undefined,
});
