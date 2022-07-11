import * as TypeGraphQL from "type-graphql";

export enum WorkspacesScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  code = "code",
  name = "name",
  description = "description",
  customers = "customers",
  users = "users",
  products = "products",
  tasks = "tasks",
  brands = "brands",
  shops = "shops",
  category = "category",
  isPublic = "isPublic",
  projects = "projects",
  author = "author",
  media = "media"
}
TypeGraphQL.registerEnumType(WorkspacesScalarFieldEnum, {
  name: "WorkspacesScalarFieldEnum",
  description: undefined,
});
