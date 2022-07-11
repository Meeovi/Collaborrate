import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OpportunitiesAvgOrderByAggregateInput } from "../inputs/OpportunitiesAvgOrderByAggregateInput";
import { OpportunitiesCountOrderByAggregateInput } from "../inputs/OpportunitiesCountOrderByAggregateInput";
import { OpportunitiesMaxOrderByAggregateInput } from "../inputs/OpportunitiesMaxOrderByAggregateInput";
import { OpportunitiesMinOrderByAggregateInput } from "../inputs/OpportunitiesMinOrderByAggregateInput";
import { OpportunitiesSumOrderByAggregateInput } from "../inputs/OpportunitiesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OpportunitiesOrderByWithAggregationInput", {
  isAbstract: true
})
export class OpportunitiesOrderByWithAggregationInput {
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
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_stage?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  probability?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  next_step?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assigned_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lead_source?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  campaign?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  account_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expected_close_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OpportunitiesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OpportunitiesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OpportunitiesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OpportunitiesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OpportunitiesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OpportunitiesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OpportunitiesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OpportunitiesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OpportunitiesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OpportunitiesSumOrderByAggregateInput | undefined;
}
