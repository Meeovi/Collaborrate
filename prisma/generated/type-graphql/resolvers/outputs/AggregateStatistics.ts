import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatisticsAvgAggregate } from "../outputs/StatisticsAvgAggregate";
import { StatisticsCountAggregate } from "../outputs/StatisticsCountAggregate";
import { StatisticsMaxAggregate } from "../outputs/StatisticsMaxAggregate";
import { StatisticsMinAggregate } from "../outputs/StatisticsMinAggregate";
import { StatisticsSumAggregate } from "../outputs/StatisticsSumAggregate";

@TypeGraphQL.ObjectType("AggregateStatistics", {
  isAbstract: true
})
export class AggregateStatistics {
  @TypeGraphQL.Field(_type => StatisticsCountAggregate, {
    nullable: true
  })
  _count!: StatisticsCountAggregate | null;

  @TypeGraphQL.Field(_type => StatisticsAvgAggregate, {
    nullable: true
  })
  _avg!: StatisticsAvgAggregate | null;

  @TypeGraphQL.Field(_type => StatisticsSumAggregate, {
    nullable: true
  })
  _sum!: StatisticsSumAggregate | null;

  @TypeGraphQL.Field(_type => StatisticsMinAggregate, {
    nullable: true
  })
  _min!: StatisticsMinAggregate | null;

  @TypeGraphQL.Field(_type => StatisticsMaxAggregate, {
    nullable: true
  })
  _max!: StatisticsMaxAggregate | null;
}
