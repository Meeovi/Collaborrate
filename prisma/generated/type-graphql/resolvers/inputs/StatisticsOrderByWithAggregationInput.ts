import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatisticsAvgOrderByAggregateInput } from "../inputs/StatisticsAvgOrderByAggregateInput";
import { StatisticsCountOrderByAggregateInput } from "../inputs/StatisticsCountOrderByAggregateInput";
import { StatisticsMaxOrderByAggregateInput } from "../inputs/StatisticsMaxOrderByAggregateInput";
import { StatisticsMinOrderByAggregateInput } from "../inputs/StatisticsMinOrderByAggregateInput";
import { StatisticsSumOrderByAggregateInput } from "../inputs/StatisticsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StatisticsOrderByWithAggregationInput", {
  isAbstract: true
})
export class StatisticsOrderByWithAggregationInput {
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
  excerpt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  special_offers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reports?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rewards?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  coupons?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categories?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  articles?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  users?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StatisticsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StatisticsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatisticsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StatisticsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatisticsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StatisticsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatisticsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StatisticsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatisticsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StatisticsSumOrderByAggregateInput | undefined;
}
