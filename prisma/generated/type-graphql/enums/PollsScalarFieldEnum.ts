import * as TypeGraphQL from "type-graphql";

export enum PollsScalarFieldEnum {
  id = "id",
  name = "name",
  excerpt = "excerpt",
  description = "description",
  image = "image",
  published = "published",
  question = "question",
  response = "response",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users"
}
TypeGraphQL.registerEnumType(PollsScalarFieldEnum, {
  name: "PollsScalarFieldEnum",
  description: undefined,
});
