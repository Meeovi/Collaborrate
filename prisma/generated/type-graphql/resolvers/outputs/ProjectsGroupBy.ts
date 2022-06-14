import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsAvgAggregate } from "../outputs/ProjectsAvgAggregate";
import { ProjectsCountAggregate } from "../outputs/ProjectsCountAggregate";
import { ProjectsMaxAggregate } from "../outputs/ProjectsMaxAggregate";
import { ProjectsMinAggregate } from "../outputs/ProjectsMinAggregate";
import { ProjectsSumAggregate } from "../outputs/ProjectsSumAggregate";

@TypeGraphQL.ObjectType("ProjectsGroupBy", {
  isAbstract: true
})
export class ProjectsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_manager!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resource!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  considerworkingdays!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_template!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assignee!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doing!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  done!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section_rule!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_timeperiod!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_privacy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_collaborators!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_updatemethod!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_progress_source!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  goal_measurement!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cust_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  staff_id!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  task_id!: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ticket_id!: bigint | null;

  @TypeGraphQL.Field(_type => ProjectsCountAggregate, {
    nullable: true
  })
  _count!: ProjectsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsAvgAggregate, {
    nullable: true
  })
  _avg!: ProjectsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsSumAggregate, {
    nullable: true
  })
  _sum!: ProjectsSumAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsMinAggregate, {
    nullable: true
  })
  _min!: ProjectsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsMaxAggregate, {
    nullable: true
  })
  _max!: ProjectsMaxAggregate | null;
}
