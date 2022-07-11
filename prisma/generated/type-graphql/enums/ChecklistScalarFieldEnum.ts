import * as TypeGraphQL from "type-graphql";

export enum ChecklistScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  username = "username",
  location = "location",
  regional_manager = "regional_manager",
  manager = "manager",
  description = "description",
  ticket = "ticket",
  project = "project",
  region = "region",
  country = "country",
  media = "media",
  prod_id = "prod_id"
}
TypeGraphQL.registerEnumType(ChecklistScalarFieldEnum, {
  name: "ChecklistScalarFieldEnum",
  description: undefined,
});
