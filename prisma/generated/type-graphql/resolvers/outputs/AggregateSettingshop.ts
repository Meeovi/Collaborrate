import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingshopAvgAggregate } from "../outputs/SettingshopAvgAggregate";
import { SettingshopCountAggregate } from "../outputs/SettingshopCountAggregate";
import { SettingshopMaxAggregate } from "../outputs/SettingshopMaxAggregate";
import { SettingshopMinAggregate } from "../outputs/SettingshopMinAggregate";
import { SettingshopSumAggregate } from "../outputs/SettingshopSumAggregate";

@TypeGraphQL.ObjectType("AggregateSettingshop", {
  isAbstract: true
})
export class AggregateSettingshop {
  @TypeGraphQL.Field(_type => SettingshopCountAggregate, {
    nullable: true
  })
  _count!: SettingshopCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingshopAvgAggregate, {
    nullable: true
  })
  _avg!: SettingshopAvgAggregate | null;

  @TypeGraphQL.Field(_type => SettingshopSumAggregate, {
    nullable: true
  })
  _sum!: SettingshopSumAggregate | null;

  @TypeGraphQL.Field(_type => SettingshopMinAggregate, {
    nullable: true
  })
  _min!: SettingshopMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingshopMaxAggregate, {
    nullable: true
  })
  _max!: SettingshopMaxAggregate | null;
}
