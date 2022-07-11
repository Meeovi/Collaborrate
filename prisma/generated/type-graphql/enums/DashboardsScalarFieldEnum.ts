import * as TypeGraphQL from "type-graphql";

export enum DashboardsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  client_id = "client_id",
  client_secret = "client_secret",
  privacy = "privacy",
  category = "category",
  url = "url",
  media = "media",
  task = "task",
  reports = "reports",
  tasks = "tasks",
  projects = "projects",
  tickets = "tickets",
  customers = "customers",
  checklists = "checklists",
  visits = "visits",
  users = "users",
  products = "products",
  articles = "articles",
  sales = "sales"
}
TypeGraphQL.registerEnumType(DashboardsScalarFieldEnum, {
  name: "DashboardsScalarFieldEnum",
  description: undefined,
});
