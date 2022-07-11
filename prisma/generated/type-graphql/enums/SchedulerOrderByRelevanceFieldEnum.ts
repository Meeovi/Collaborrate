import * as TypeGraphQL from "type-graphql";

export enum SchedulerOrderByRelevanceFieldEnum {
  end_date = "end_date",
  level = "level",
  login = "login",
  notes = "notes",
  start_date = "start_date",
  whid = "whid"
}
TypeGraphQL.registerEnumType(SchedulerOrderByRelevanceFieldEnum, {
  name: "SchedulerOrderByRelevanceFieldEnum",
  description: undefined,
});
