import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnalyticsAvgAggregate } from "../outputs/AnalyticsAvgAggregate";
import { AnalyticsCountAggregate } from "../outputs/AnalyticsCountAggregate";
import { AnalyticsMaxAggregate } from "../outputs/AnalyticsMaxAggregate";
import { AnalyticsMinAggregate } from "../outputs/AnalyticsMinAggregate";
import { AnalyticsSumAggregate } from "../outputs/AnalyticsSumAggregate";

@TypeGraphQL.ObjectType("AggregateAnalytics", {
  isAbstract: true
})
export class AggregateAnalytics {
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
