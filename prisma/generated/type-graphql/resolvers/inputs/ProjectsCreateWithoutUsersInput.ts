import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutProjectsInput } from "../inputs/CustomersCreateNestedOneWithoutProjectsInput";
import { TasksCreateNestedOneWithoutProjectsInput } from "../inputs/TasksCreateNestedOneWithoutProjectsInput";
import { TicketingCreateNestedOneWithoutProjects_projectsToticketingInput } from "../inputs/TicketingCreateNestedOneWithoutProjects_projectsToticketingInput";
import { WorkspacesCreateNestedManyWithoutProjects_projectsToworkspacesInput } from "../inputs/WorkspacesCreateNestedManyWithoutProjects_projectsToworkspacesInput";

@TypeGraphQL.InputType("ProjectsCreateWithoutUsersInput", {
  isAbstract: true
})
export class ProjectsCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_manager?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resource?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  considerworkingdays?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_template?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assignee?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doing?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  done?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section_rule?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_timeperiod?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_privacy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_collaborators?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_updatemethod?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_progress_source?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_measurement?: string | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutProjectsInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateNestedOneWithoutProjectsInput, {
    nullable: true
  })
  tasks?: TasksCreateNestedOneWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TicketingCreateNestedOneWithoutProjects_projectsToticketingInput, {
    nullable: true
  })
  ticketing?: TicketingCreateNestedOneWithoutProjects_projectsToticketingInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateNestedManyWithoutProjects_projectsToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesCreateNestedManyWithoutProjects_projectsToworkspacesInput | undefined;
}
