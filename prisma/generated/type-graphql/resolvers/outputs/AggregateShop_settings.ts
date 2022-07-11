import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Shop_settingsAvgAggregate } from "../outputs/Shop_settingsAvgAggregate";
import { Shop_settingsCountAggregate } from "../outputs/Shop_settingsCountAggregate";
import { Shop_settingsMaxAggregate } from "../outputs/Shop_settingsMaxAggregate";
import { Shop_settingsMinAggregate } from "../outputs/Shop_settingsMinAggregate";
import { Shop_settingsSumAggregate } from "../outputs/Shop_settingsSumAggregate";

@TypeGraphQL.ObjectType("AggregateShop_settings", {
  isAbstract: true
})
export class AggregateShop_settings {
  @TypeGraphQL.Field(_type => Shop_settingsCountAggregate, {
    nullable: true
  })
  _count!: Shop_settingsCountAggregate | null;

  @TypeGraphQL.Field(_type => Shop_settingsAvgAggregate, {
    nullable: true
  })
  _avg!: Shop_settingsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Shop_settingsSumAggregate, {
    nullable: true
  })
  _sum!: Shop_settingsSumAggregate | null;

  @TypeGraphQL.Field(_type => Shop_settingsMinAggregate, {
    nullable: true
  })
  _min!: Shop_settingsMinAggregate | null;

  @TypeGraphQL.Field(_type => Shop_settingsMaxAggregate, {
    nullable: true
  })
  _max!: Shop_settingsMaxAggregate | null;
}
