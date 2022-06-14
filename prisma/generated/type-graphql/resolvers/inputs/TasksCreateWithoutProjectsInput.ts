import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateNestedManyWithoutTasksInput } from "../inputs/MediamanagerCreateNestedManyWithoutTasksInput";
import { WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput";

@TypeGraphQL.InputType("TasksCreateWithoutProjectsInput", {
  isAbstract: true
})
export class TasksCreateWithoutProjectsInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  due_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  related_to?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_modified?: Date | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateNestedManyWithoutTasksInput, {
    nullable: true
  })
  mediamanager?: MediamanagerCreateNestedManyWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput | undefined;
}
