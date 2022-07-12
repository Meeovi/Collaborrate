import * as TypeGraphQL from "type-graphql";

export enum MeetingScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  subject = "subject",
  start_date = "start_date",
  end_date = "end_date",
  duration = "duration",
  status = "status",
  related_to = "related_to",
  reminders = "reminders",
  content = "content",
  assigned_to = "assigned_to",
  invitees = "invitees",
  scheduling = "scheduling"
}
TypeGraphQL.registerEnumType(MeetingScalarFieldEnum, {
  name: "MeetingScalarFieldEnum",
  description: undefined,
});