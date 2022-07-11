import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TasksAvgOrderByAggregateInput } from "../inputs/TasksAvgOrderByAggregateInput";
import { TasksCountOrderByAggregateInput } from "../inputs/TasksCountOrderByAggregateInput";
import { TasksMaxOrderByAggregateInput } from "../inputs/TasksMaxOrderByAggregateInput";
import { TasksMinOrderByAggregateInput } from "../inputs/TasksMinOrderByAggregateInput";
import { TasksSumOrderByAggregateInput } from "../inputs/TasksSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TasksOrderByWithAggregationInput", {
  isAbstract: true
})
export class TasksOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TasksCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TasksCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TasksAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TasksAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TasksMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TasksMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TasksMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TasksMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TasksSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TasksSumOrderByAggregateInput | undefined;
}
