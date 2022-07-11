import * as TypeGraphQL from "type-graphql";

export enum TasksScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  subject = "subject",
  start_date = "start_date",
  due_date = "due_date",
  priority = "priority",
  description = "description",
  status = "status",
  related_to = "related_to",
  contact = "contact",
  assigned_to = "assigned_to",
  date_modified = "date_modified"
}
TypeGraphQL.registerEnumType(TasksScalarFieldEnum, {
  name: "TasksScalarFieldEnum",
  description: undefined,
});
