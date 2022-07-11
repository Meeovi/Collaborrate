import * as TypeGraphQL from "type-graphql";

export enum TasksOrderByRelevanceFieldEnum {
  subject = "subject",
  start_date = "start_date",
  due_date = "due_date",
  priority = "priority",
  description = "description",
  status = "status",
  related_to = "related_to",
  contact = "contact",
  assigned_to = "assigned_to"
}
TypeGraphQL.registerEnumType(TasksOrderByRelevanceFieldEnum, {
  name: "TasksOrderByRelevanceFieldEnum",
  description: undefined,
});
