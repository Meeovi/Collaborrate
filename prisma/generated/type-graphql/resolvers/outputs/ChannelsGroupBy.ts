import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelsAvgAggregate } from "../outputs/ChannelsAvgAggregate";
import { ChannelsCountAggregate } from "../outputs/ChannelsCountAggregate";
import { ChannelsMaxAggregate } from "../outputs/ChannelsMaxAggregate";
import { ChannelsMinAggregate } from "../outputs/ChannelsMinAggregate";
import { ChannelsSumAggregate } from "../outputs/ChannelsSumAggregate";

@TypeGraphQL.ObjectType("ChannelsGroupBy", {
  isAbstract: true
})
export class ChannelsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_lang!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  include_tax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_zone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_shipping!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret!: string | null;

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
