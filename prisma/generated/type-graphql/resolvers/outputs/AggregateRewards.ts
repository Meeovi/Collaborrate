import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RewardsAvgAggregate } from "../outputs/RewardsAvgAggregate";
import { RewardsCountAggregate } from "../outputs/RewardsCountAggregate";
import { RewardsMaxAggregate } from "../outputs/RewardsMaxAggregate";
import { RewardsMinAggregate } from "../outputs/RewardsMinAggregate";
import { RewardsSumAggregate } from "../outputs/RewardsSumAggregate";

@TypeGraphQL.ObjectType("AggregateRewards", {
  isAbstract: true
})
export class AggregateRewards {
  @TypeGraphQL.Field(_type => RewardsCountAggregate, {
    nullable: true
  })
  _count!: RewardsCountAggregate | null;

  @TypeGraphQL.Field(_type => RewardsAvgAggregate, {
    nullable: true
  })
  _avg!: RewardsAvgAggregate | null;

  @TypeGraphQL.Field(_type => RewardsSumAggregate, {
    nullable: true
  })
  _sum!: RewardsSumAggregate | null;

  @TypeGraphQL.Field(_type => RewardsMinAggregate, {
    nullable: true
  })
  _min!: RewardsMinAggregate | null;

  @TypeGraphQL.Field(_type => RewardsMaxAggregate, {
    nullable: true
  })
  _max!: RewardsMaxAggregate | null;
}
