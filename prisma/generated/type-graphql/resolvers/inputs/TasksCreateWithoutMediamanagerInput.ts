import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsCreateNestedManyWithoutTasksInput } from "../inputs/ProjectsCreateNestedManyWithoutTasksInput";
import { WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput } from "../inputs/WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput";

@TypeGraphQL.InputType("TasksCreateWithoutMediamanagerInput", {
  isAbstract: true
})
export class TasksCreateWithoutMediamanagerInput {
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

  @TypeGraphQL.Field(_type => ProjectsCreateNestedManyWithoutTasksInput, {
    nullable: true
  })
  projects?: ProjectsCreateNestedManyWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesCreateNestedManyWithoutTasks_tasksToworkspacesInput | undefined;
}
