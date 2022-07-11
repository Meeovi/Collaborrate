import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DashboardsAvgOrderByAggregateInput } from "../inputs/DashboardsAvgOrderByAggregateInput";
import { DashboardsCountOrderByAggregateInput } from "../inputs/DashboardsCountOrderByAggregateInput";
import { DashboardsMaxOrderByAggregateInput } from "../inputs/DashboardsMaxOrderByAggregateInput";
import { DashboardsMinOrderByAggregateInput } from "../inputs/DashboardsMinOrderByAggregateInput";
import { DashboardsSumOrderByAggregateInput } from "../inputs/DashboardsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DashboardsOrderByWithAggregationInput", {
  isAbstract: true
})
export class DashboardsOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  client_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  client_secret?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  privacy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  task?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reports?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tasks?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  projects?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tickets?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  checklists?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visits?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  users?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  articles?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DashboardsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DashboardsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DashboardsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DashboardsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DashboardsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DashboardsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DashboardsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DashboardsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DashboardsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DashboardsSumOrderByAggregateInput | undefined;
}
