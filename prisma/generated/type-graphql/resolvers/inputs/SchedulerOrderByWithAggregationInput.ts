import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulerAvgOrderByAggregateInput } from "../inputs/SchedulerAvgOrderByAggregateInput";
import { SchedulerCountOrderByAggregateInput } from "../inputs/SchedulerCountOrderByAggregateInput";
import { SchedulerMaxOrderByAggregateInput } from "../inputs/SchedulerMaxOrderByAggregateInput";
import { SchedulerMinOrderByAggregateInput } from "../inputs/SchedulerMinOrderByAggregateInput";
import { SchedulerSumOrderByAggregateInput } from "../inputs/SchedulerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SchedulerOrderByWithAggregationInput", {
  isAbstract: true
})
export class SchedulerOrderByWithAggregationInput {
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
  end_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  login?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  whid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchedulerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SchedulerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchedulerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SchedulerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchedulerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SchedulerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchedulerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SchedulerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchedulerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SchedulerSumOrderByAggregateInput | undefined;
}
