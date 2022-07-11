import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CouponsAvgOrderByAggregateInput } from "../inputs/CouponsAvgOrderByAggregateInput";
import { CouponsCountOrderByAggregateInput } from "../inputs/CouponsCountOrderByAggregateInput";
import { CouponsMaxOrderByAggregateInput } from "../inputs/CouponsMaxOrderByAggregateInput";
import { CouponsMinOrderByAggregateInput } from "../inputs/CouponsMinOrderByAggregateInput";
import { CouponsSumOrderByAggregateInput } from "../inputs/CouponsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CouponsOrderByWithAggregationInput", {
  isAbstract: true
})
export class CouponsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CouponsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CouponsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CouponsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CouponsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CouponsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CouponsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CouponsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CouponsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CouponsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CouponsSumOrderByAggregateInput | undefined;
}
