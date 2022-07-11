import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsmarketingAvgAggregate } from "../outputs/SettingsmarketingAvgAggregate";
import { SettingsmarketingCountAggregate } from "../outputs/SettingsmarketingCountAggregate";
import { SettingsmarketingMaxAggregate } from "../outputs/SettingsmarketingMaxAggregate";
import { SettingsmarketingMinAggregate } from "../outputs/SettingsmarketingMinAggregate";
import { SettingsmarketingSumAggregate } from "../outputs/SettingsmarketingSumAggregate";

@TypeGraphQL.ObjectType("AggregateSettingsmarketing", {
  isAbstract: true
})
export class AggregateSettingsmarketing {
  @TypeGraphQL.Field(_type => SettingsmarketingCountAggregate, {
    nullable: true
  })
  _count!: SettingsmarketingCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingsmarketingAvgAggregate, {
    nullable: true
  })
  _avg!: SettingsmarketingAvgAggregate | null;

  @TypeGraphQL.Field(_type => SettingsmarketingSumAggregate, {
    nullable: true
  })
  _sum!: SettingsmarketingSumAggregate | null;

  @TypeGraphQL.Field(_type => SettingsmarketingMinAggregate, {
    nullable: true
  })
  _min!: SettingsmarketingMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingsmarketingMaxAggregate, {
    nullable: true
  })
  _max!: SettingsmarketingMaxAggregate | null;
}
