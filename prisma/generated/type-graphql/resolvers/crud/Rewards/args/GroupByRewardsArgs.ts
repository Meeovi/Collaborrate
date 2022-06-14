import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsOrderByWithAggregationInput } from "../../../inputs/RewardsOrderByWithAggregationInput";
import { RewardsScalarWhereWithAggregatesInput } from "../../../inputs/RewardsScalarWhereWithAggregatesInput";
import { RewardsWhereInput } from "../../../inputs/RewardsWhereInput";
import { RewardsScalarFieldEnum } from "../../../../enums/RewardsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRewardsArgs {
  @TypeGraphQL.Field(_type => RewardsWhereInput, {
    nullable: true
  })
  where?: RewardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RewardsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RewardsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RewardsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "slug" | "level" | "created_at" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => RewardsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RewardsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
