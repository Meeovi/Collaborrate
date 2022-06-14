import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsOrderByWithAggregationInput } from "../../../inputs/ProjectsOrderByWithAggregationInput";
import { ProjectsScalarWhereWithAggregatesInput } from "../../../inputs/ProjectsScalarWhereWithAggregatesInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";
import { ProjectsScalarFieldEnum } from "../../../../enums/ProjectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectsArgs {
  @TypeGraphQL.Field(_type => ProjectsWhereInput, {
    nullable: true
  })
  where?: ProjectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProjectsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "project_manager" | "start_date" | "end_date" | "resource" | "considerworkingdays" | "project_template" | "status" | "created_at" | "priority" | "assignee" | "doing" | "done" | "section_rule" | "goal_name" | "goal_timeperiod" | "goal_privacy" | "goal_collaborators" | "goal_updatemethod" | "goal_progress_source" | "goal_measurement" | "cust_id" | "staff_id" | "task_id" | "ticket_id">;

  @TypeGraphQL.Field(_type => ProjectsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
