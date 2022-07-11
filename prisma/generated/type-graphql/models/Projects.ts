import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customers } from "../models/Customers";
import { Tasks } from "../models/Tasks";
import { Ticketing } from "../models/Ticketing";
import { Users } from "../models/Users";
import { Workspaces } from "../models/Workspaces";
import { ProjectsCount } from "../resolvers/outputs/ProjectsCount";

@TypeGraphQL.ObjectType("Projects", {
  isAbstract: true
})
export class Projects {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_manager?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resource?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  considerworkingdays?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_template?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assignee?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doing?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  done?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section_rule?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_timeperiod?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_privacy?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_collaborators?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_updatemethod?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_progress_source?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_measurement?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cust_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  staff_id?: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  task_id?: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ticket_id?: bigint | null;

  customers?: Customers | null;

  users?: Users | null;

  tasks?: Tasks | null;

  ticketing?: Ticketing | null;

  workspaces?: Workspaces[];

  @TypeGraphQL.Field(_type => ProjectsCount, {
    nullable: true
  })
  _count?: ProjectsCount | null;
}
