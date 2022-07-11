import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingscustomersAvgAggregate } from "../outputs/SettingscustomersAvgAggregate";
import { SettingscustomersCountAggregate } from "../outputs/SettingscustomersCountAggregate";
import { SettingscustomersMaxAggregate } from "../outputs/SettingscustomersMaxAggregate";
import { SettingscustomersMinAggregate } from "../outputs/SettingscustomersMinAggregate";
import { SettingscustomersSumAggregate } from "../outputs/SettingscustomersSumAggregate";

@TypeGraphQL.ObjectType("AggregateSettingscustomers", {
  isAbstract: true
})
export class AggregateSettingscustomers {
  @TypeGraphQL.Field(_type => SettingscustomersCountAggregate, {
    nullable: true
  })
  _count!: SettingscustomersCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingscustomersAvgAggregate, {
    nullable: true
  })
  _avg!: SettingscustomersAvgAggregate | null;

  @TypeGraphQL.Field(_type => SettingscustomersSumAggregate, {
    nullable: true
  })
  _sum!: SettingscustomersSumAggregate | null;

  @TypeGraphQL.Field(_type => SettingscustomersMinAggregate, {
    nullable: true
  })
  _min!: SettingscustomersMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingscustomersMaxAggregate, {
    nullable: true
  })
  _max!: SettingscustomersMaxAggregate | null;
}
