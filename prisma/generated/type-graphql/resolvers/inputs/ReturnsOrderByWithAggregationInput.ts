import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsAvgOrderByAggregateInput } from "../inputs/ReturnsAvgOrderByAggregateInput";
import { ReturnsCountOrderByAggregateInput } from "../inputs/ReturnsCountOrderByAggregateInput";
import { ReturnsMaxOrderByAggregateInput } from "../inputs/ReturnsMaxOrderByAggregateInput";
import { ReturnsMinOrderByAggregateInput } from "../inputs/ReturnsMinOrderByAggregateInput";
import { ReturnsSumOrderByAggregateInput } from "../inputs/ReturnsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReturnsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReturnsOrderByWithAggregationInput {
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
  validity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  return_prefix?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReturnsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReturnsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ReturnsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReturnsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReturnsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ReturnsSumOrderByAggregateInput | undefined;
}
