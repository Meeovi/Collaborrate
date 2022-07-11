import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StocksAvgOrderByAggregateInput } from "../inputs/StocksAvgOrderByAggregateInput";
import { StocksCountOrderByAggregateInput } from "../inputs/StocksCountOrderByAggregateInput";
import { StocksMaxOrderByAggregateInput } from "../inputs/StocksMaxOrderByAggregateInput";
import { StocksMinOrderByAggregateInput } from "../inputs/StocksMinOrderByAggregateInput";
import { StocksSumOrderByAggregateInput } from "../inputs/StocksSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StocksOrderByWithAggregationInput", {
  isAbstract: true
})
export class StocksOrderByWithAggregationInput {
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
  enabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sources?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StocksCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StocksCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StocksAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StocksAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StocksMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StocksMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StocksMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StocksMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StocksSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StocksSumOrderByAggregateInput | undefined;
}
