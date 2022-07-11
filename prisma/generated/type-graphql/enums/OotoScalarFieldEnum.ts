import * as TypeGraphQL from "type-graphql";

export enum OotoScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  login = "login",
  start_date = "start_date",
  end_date = "end_date",
  note = "note",
  using_time = "using_time",
  location = "location"
}
TypeGraphQL.registerEnumType(OotoScalarFieldEnum, {
  name: "OotoScalarFieldEnum",
  description: undefined,
});
