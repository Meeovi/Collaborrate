import * as TypeGraphQL from "type-graphql";

export enum EndofshiftScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  content = "content",
  login = "login",
  mcms = "mcms",
  next_shift = "next_shift",
  projects = "projects",
  tickets = "tickets",
  whid = "whid"
}
TypeGraphQL.registerEnumType(EndofshiftScalarFieldEnum, {
  name: "EndofshiftScalarFieldEnum",
  description: undefined,
});
