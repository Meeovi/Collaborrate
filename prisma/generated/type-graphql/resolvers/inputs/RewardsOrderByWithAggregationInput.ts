import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RewardsAvgOrderByAggregateInput } from "../inputs/RewardsAvgOrderByAggregateInput";
import { RewardsCountOrderByAggregateInput } from "../inputs/RewardsCountOrderByAggregateInput";
import { RewardsMaxOrderByAggregateInput } from "../inputs/RewardsMaxOrderByAggregateInput";
import { RewardsMinOrderByAggregateInput } from "../inputs/RewardsMinOrderByAggregateInput";
import { RewardsSumOrderByAggregateInput } from "../inputs/RewardsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RewardsOrderByWithAggregationInput", {
  isAbstract: true
})
export class RewardsOrderByWithAggregationInput {
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
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => RewardsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RewardsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RewardsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RewardsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RewardsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RewardsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RewardsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RewardsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RewardsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RewardsSumOrderByAggregateInput | undefined;
}
