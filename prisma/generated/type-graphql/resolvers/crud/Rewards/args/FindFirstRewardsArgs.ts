import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsOrderByWithRelationInput } from "../../../inputs/RewardsOrderByWithRelationInput";
import { RewardsWhereInput } from "../../../inputs/RewardsWhereInput";
import { RewardsWhereUniqueInput } from "../../../inputs/RewardsWhereUniqueInput";
import { RewardsScalarFieldEnum } from "../../../../enums/RewardsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstRewardsArgs {
  @TypeGraphQL.Field(_type => RewardsWhereInput, {
    nullable: true
  })
  where?: RewardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RewardsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RewardsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RewardsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RewardsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RewardsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "slug" | "level" | "created_at" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
