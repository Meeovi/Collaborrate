import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOrderByRelevanceFieldEnum } from "../../enums/ProjectsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProjectsOrderByRelevanceInput", {
  isAbstract: true
})
export class ProjectsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ProjectsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "project_manager" | "start_date" | "end_date" | "resource" | "considerworkingdays" | "project_template" | "status" | "priority" | "assignee" | "doing" | "done" | "section_rule" | "goal_name" | "goal_timeperiod" | "goal_privacy" | "goal_collaborators" | "goal_updatemethod" | "goal_progress_source" | "goal_measurement">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
