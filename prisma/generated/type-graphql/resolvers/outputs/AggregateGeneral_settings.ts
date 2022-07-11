import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { General_settingsAvgAggregate } from "../outputs/General_settingsAvgAggregate";
import { General_settingsCountAggregate } from "../outputs/General_settingsCountAggregate";
import { General_settingsMaxAggregate } from "../outputs/General_settingsMaxAggregate";
import { General_settingsMinAggregate } from "../outputs/General_settingsMinAggregate";
import { General_settingsSumAggregate } from "../outputs/General_settingsSumAggregate";

@TypeGraphQL.ObjectType("AggregateGeneral_settings", {
  isAbstract: true
})
export class AggregateGeneral_settings {
  @TypeGraphQL.Field(_type => General_settingsCountAggregate, {
    nullable: true
  })
  _count!: General_settingsCountAggregate | null;

  @TypeGraphQL.Field(_type => General_settingsAvgAggregate, {
    nullable: true
  })
  _avg!: General_settingsAvgAggregate | null;

  @TypeGraphQL.Field(_type => General_settingsSumAggregate, {
    nullable: true
  })
  _sum!: General_settingsSumAggregate | null;

  @TypeGraphQL.Field(_type => General_settingsMinAggregate, {
    nullable: true
  })
  _min!: General_settingsMinAggregate | null;

  @TypeGraphQL.Field(_type => General_settingsMaxAggregate, {
    nullable: true
  })
  _max!: General_settingsMaxAggregate | null;
}
