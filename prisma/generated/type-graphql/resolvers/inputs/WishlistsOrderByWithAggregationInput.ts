import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistsAvgOrderByAggregateInput } from "../inputs/WishlistsAvgOrderByAggregateInput";
import { WishlistsCountOrderByAggregateInput } from "../inputs/WishlistsCountOrderByAggregateInput";
import { WishlistsMaxOrderByAggregateInput } from "../inputs/WishlistsMaxOrderByAggregateInput";
import { WishlistsMinOrderByAggregateInput } from "../inputs/WishlistsMinOrderByAggregateInput";
import { WishlistsSumOrderByAggregateInput } from "../inputs/WishlistsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WishlistsOrderByWithAggregationInput", {
  isAbstract: true
})
export class WishlistsOrderByWithAggregationInput {
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
  customers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WishlistsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WishlistsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WishlistsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WishlistsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WishlistsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WishlistsSumOrderByAggregateInput | undefined;
}
