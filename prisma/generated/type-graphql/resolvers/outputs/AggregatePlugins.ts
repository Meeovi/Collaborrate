import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginsAvgAggregate } from "../outputs/PluginsAvgAggregate";
import { PluginsCountAggregate } from "../outputs/PluginsCountAggregate";
import { PluginsMaxAggregate } from "../outputs/PluginsMaxAggregate";
import { PluginsMinAggregate } from "../outputs/PluginsMinAggregate";
import { PluginsSumAggregate } from "../outputs/PluginsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePlugins", {
  isAbstract: true
})
export class AggregatePlugins {
  @TypeGraphQL.Field(_type => PluginsCountAggregate, {
    nullable: true
  })
  _count!: PluginsCountAggregate | null;

  @TypeGraphQL.Field(_type => PluginsAvgAggregate, {
    nullable: true
  })
  _avg!: PluginsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PluginsSumAggregate, {
    nullable: true
  })
  _sum!: PluginsSumAggregate | null;

  @TypeGraphQL.Field(_type => PluginsMinAggregate, {
    nullable: true
  })
  _min!: PluginsMinAggregate | null;

  @TypeGraphQL.Field(_type => PluginsMaxAggregate, {
    nullable: true
  })
  _max!: PluginsMaxAggregate | null;
}
