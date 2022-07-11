import * as TypeGraphQL from "type-graphql";

export enum DashboardsOrderByRelevanceFieldEnum {
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
TypeGraphQL.registerEnumType(DashboardsOrderByRelevanceFieldEnum, {
  name: "DashboardsOrderByRelevanceFieldEnum",
  description: undefined,
});
