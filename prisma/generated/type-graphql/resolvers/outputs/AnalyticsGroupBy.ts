import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnalyticsAvgAggregate } from "../outputs/AnalyticsAvgAggregate";
import { AnalyticsCountAggregate } from "../outputs/AnalyticsCountAggregate";
import { AnalyticsMaxAggregate } from "../outputs/AnalyticsMaxAggregate";
import { AnalyticsMinAggregate } from "../outputs/AnalyticsMinAggregate";
import { AnalyticsSumAggregate } from "../outputs/AnalyticsSumAggregate";

@TypeGraphQL.ObjectType("AnalyticsGroupBy", {
  isAbstract: true
})
export class AnalyticsGroupBy {
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
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  share_data!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tracking_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  property_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_view!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  property_hit!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tracking_code!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  data_collection!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  data_retention!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  search_analytics!: string | null;

  @TypeGraphQL.Field(_type => AnalyticsCountAggregate, {
    nullable: true
  })
  _count!: AnalyticsCountAggregate | null;

  @TypeGraphQL.Field(_type => AnalyticsAvgAggregate, {
    nullable: true
  })
  _avg!: AnalyticsAvgAggregate | null;

  @TypeGraphQL.Field(_type => AnalyticsSumAggregate, {
    nullable: true
  })
  _sum!: AnalyticsSumAggregate | null;

  @TypeGraphQL.Field(_type => AnalyticsMinAggregate, {
    nullable: true
  })
  _min!: AnalyticsMinAggregate | null;

  @TypeGraphQL.Field(_type => AnalyticsMaxAggregate, {
    nullable: true
  })
  _max!: AnalyticsMaxAggregate | null;
}
