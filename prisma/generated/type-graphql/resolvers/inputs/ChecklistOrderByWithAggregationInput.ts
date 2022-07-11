import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChecklistAvgOrderByAggregateInput } from "../inputs/ChecklistAvgOrderByAggregateInput";
import { ChecklistCountOrderByAggregateInput } from "../inputs/ChecklistCountOrderByAggregateInput";
import { ChecklistMaxOrderByAggregateInput } from "../inputs/ChecklistMaxOrderByAggregateInput";
import { ChecklistMinOrderByAggregateInput } from "../inputs/ChecklistMinOrderByAggregateInput";
import { ChecklistSumOrderByAggregateInput } from "../inputs/ChecklistSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChecklistOrderByWithAggregationInput", {
  isAbstract: true
})
export class ChecklistOrderByWithAggregationInput {
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
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  regional_manager?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  manager?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ticket?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  region?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChecklistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChecklistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ChecklistAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChecklistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChecklistMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ChecklistSumOrderByAggregateInput | undefined;
}
