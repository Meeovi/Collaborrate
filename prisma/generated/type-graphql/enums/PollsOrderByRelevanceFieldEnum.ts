import * as TypeGraphQL from "type-graphql";

export enum PollsOrderByRelevanceFieldEnum {
  name = "name",
  excerpt = "excerpt",
  description = "description",
  image = "image",
  question = "question",
  response = "response",
  categories = "categories",
  articles = "articles",
  products = "products",
  customers = "customers",
  users = "users"
}
TypeGraphQL.registerEnumType(PollsOrderByRelevanceFieldEnum, {
  name: "PollsOrderByRelevanceFieldEnum",
  description: undefined,
});
