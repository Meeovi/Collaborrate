import * as TypeGraphQL from "type-graphql";

export enum VisitsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  location = "location",
  username = "username",
  reason = "reason",
  content = "content",
  emergency = "emergency",
  start_date = "start_date",
  end_date = "end_date",
  task = "task",
  meeting = "meeting"
}
TypeGraphQL.registerEnumType(VisitsScalarFieldEnum, {
  name: "VisitsScalarFieldEnum",
  description: undefined,
});
