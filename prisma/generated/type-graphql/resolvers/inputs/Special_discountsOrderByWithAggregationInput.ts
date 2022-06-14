import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Special_discountsAvgOrderByAggregateInput } from "../inputs/Special_discountsAvgOrderByAggregateInput";
import { Special_discountsCountOrderByAggregateInput } from "../inputs/Special_discountsCountOrderByAggregateInput";
import { Special_discountsMaxOrderByAggregateInput } from "../inputs/Special_discountsMaxOrderByAggregateInput";
import { Special_discountsMinOrderByAggregateInput } from "../inputs/Special_discountsMinOrderByAggregateInput";
import { Special_discountsSumOrderByAggregateInput } from "../inputs/Special_discountsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Special_discountsOrderByWithAggregationInput", {
  isAbstract: true
})
export class Special_discountsOrderByWithAggregationInput {
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
  discount?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Special_discountsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Special_discountsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Special_discountsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Special_discountsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Special_discountsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Special_discountsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Special_discountsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Special_discountsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Special_discountsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Special_discountsSumOrderByAggregateInput | undefined;
}
