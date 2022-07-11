import * as TypeGraphQL from "type-graphql";

export enum VisitsOrderByRelevanceFieldEnum {
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
TypeGraphQL.registerEnumType(VisitsOrderByRelevanceFieldEnum, {
  name: "VisitsOrderByRelevanceFieldEnum",
  description: undefined,
});
