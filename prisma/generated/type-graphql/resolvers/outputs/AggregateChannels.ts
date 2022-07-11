import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelsAvgAggregate } from "../outputs/ChannelsAvgAggregate";
import { ChannelsCountAggregate } from "../outputs/ChannelsCountAggregate";
import { ChannelsMaxAggregate } from "../outputs/ChannelsMaxAggregate";
import { ChannelsMinAggregate } from "../outputs/ChannelsMinAggregate";
import { ChannelsSumAggregate } from "../outputs/ChannelsSumAggregate";

@TypeGraphQL.ObjectType("AggregateChannels", {
  isAbstract: true
})
export class AggregateChannels {
  @TypeGraphQL.Field(_type => ChannelsCountAggregate, {
    nullable: true
  })
  _count!: ChannelsCountAggregate | null;

  @TypeGraphQL.Field(_type => ChannelsAvgAggregate, {
    nullable: true
  })
  _avg!: ChannelsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChannelsSumAggregate, {
    nullable: true
  })
  _sum!: ChannelsSumAggregate | null;

  @TypeGraphQL.Field(_type => ChannelsMinAggregate, {
    nullable: true
  })
  _min!: ChannelsMinAggregate | null;

  @TypeGraphQL.Field(_type => ChannelsMaxAggregate, {
    nullable: true
  })
  _max!: ChannelsMaxAggregate | null;
}
