import * as TypeGraphQL from "type-graphql";

export enum SchedulerScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  end_date = "end_date",
  level = "level",
  login = "login",
  notes = "notes",
  start_date = "start_date",
  whid = "whid"
}
TypeGraphQL.registerEnumType(SchedulerScalarFieldEnum, {
  name: "SchedulerScalarFieldEnum",
  description: undefined,
});
