import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnalyticsAvgOrderByAggregateInput } from "../inputs/AnalyticsAvgOrderByAggregateInput";
import { AnalyticsCountOrderByAggregateInput } from "../inputs/AnalyticsCountOrderByAggregateInput";
import { AnalyticsMaxOrderByAggregateInput } from "../inputs/AnalyticsMaxOrderByAggregateInput";
import { AnalyticsMinOrderByAggregateInput } from "../inputs/AnalyticsMinOrderByAggregateInput";
import { AnalyticsSumOrderByAggregateInput } from "../inputs/AnalyticsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AnalyticsOrderByWithAggregationInput", {
  isAbstract: true
})
export class AnalyticsOrderByWithAggregationInput {
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
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  share_data?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website_name?: "asc" | "desc" | undefined;

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
  tracking_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  property_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_view?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  property_hit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tracking_code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  data_collection?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  data_retention?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  search_analytics?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AnalyticsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AnalyticsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AnalyticsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AnalyticsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AnalyticsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AnalyticsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AnalyticsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AnalyticsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AnalyticsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AnalyticsSumOrderByAggregateInput | undefined;
}
