import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginsAvgAggregate } from "../outputs/PluginsAvgAggregate";
import { PluginsCountAggregate } from "../outputs/PluginsCountAggregate";
import { PluginsMaxAggregate } from "../outputs/PluginsMaxAggregate";
import { PluginsMinAggregate } from "../outputs/PluginsMinAggregate";
import { PluginsSumAggregate } from "../outputs/PluginsSumAggregate";

@TypeGraphQL.ObjectType("PluginsGroupBy", {
  isAbstract: true
})
export class PluginsGroupBy {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  github_link!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  screenshots!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_updated!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publisher_name!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  agree_terms!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  publisher_email!: string | null;

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
