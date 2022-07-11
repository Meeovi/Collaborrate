import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsAvgOrderByAggregateInput } from "../inputs/ProjectsAvgOrderByAggregateInput";
import { ProjectsCountOrderByAggregateInput } from "../inputs/ProjectsCountOrderByAggregateInput";
import { ProjectsMaxOrderByAggregateInput } from "../inputs/ProjectsMaxOrderByAggregateInput";
import { ProjectsMinOrderByAggregateInput } from "../inputs/ProjectsMinOrderByAggregateInput";
import { ProjectsSumOrderByAggregateInput } from "../inputs/ProjectsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProjectsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProjectsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_manager?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  end_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resource?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  considerworkingdays?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_template?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignee?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doing?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  done?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  section_rule?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  goal_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  goal_timeperiod?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  goal_privacy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  goal_collaborators?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  goal_updatemethod?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  goal_progress_source?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  goal_measurement?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  task_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ticket_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProjectsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProjectsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProjectsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProjectsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProjectsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProjectsSumOrderByAggregateInput | undefined;
}
