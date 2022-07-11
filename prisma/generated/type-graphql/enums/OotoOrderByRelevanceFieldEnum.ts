import * as TypeGraphQL from "type-graphql";

export enum OotoOrderByRelevanceFieldEnum {
  login = "login",
  start_date = "start_date",
  end_date = "end_date",
  note = "note",
  using_time = "using_time",
  location = "location"
}
TypeGraphQL.registerEnumType(OotoOrderByRelevanceFieldEnum, {
  name: "OotoOrderByRelevanceFieldEnum",
  description: undefined,
});
