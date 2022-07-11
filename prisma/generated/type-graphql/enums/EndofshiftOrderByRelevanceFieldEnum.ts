import * as TypeGraphQL from "type-graphql";

export enum EndofshiftOrderByRelevanceFieldEnum {
  content = "content",
  login = "login",
  mcms = "mcms",
  next_shift = "next_shift",
  projects = "projects",
  tickets = "tickets",
  whid = "whid"
}
TypeGraphQL.registerEnumType(EndofshiftOrderByRelevanceFieldEnum, {
  name: "EndofshiftOrderByRelevanceFieldEnum",
  description: undefined,
});
