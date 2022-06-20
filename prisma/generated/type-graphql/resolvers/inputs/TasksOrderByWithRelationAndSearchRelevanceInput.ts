import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerOrderByRelationAggregateInput } from "../inputs/MediamanagerOrderByRelationAggregateInput";
import { ProjectsOrderByRelationAggregateInput } from "../inputs/ProjectsOrderByRelationAggregateInput";
import { TasksOrderByRelevanceInput } from "../inputs/TasksOrderByRelevanceInput";
import { WorkspacesOrderByRelationAggregateInput } from "../inputs/WorkspacesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TasksOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class TasksOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  due_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  related_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contact?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assigned_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_modified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MediamanagerOrderByRelationAggregateInput, {
    nullable: true
  })
  mediamanager?: MediamanagerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: ProjectsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesOrderByRelationAggregateInput, {
    nullable: true
  })
  workspaces?: WorkspacesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TasksOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: TasksOrderByRelevanceInput | undefined;
}
