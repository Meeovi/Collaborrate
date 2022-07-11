import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatisticsAvgAggregate } from "../outputs/StatisticsAvgAggregate";
import { StatisticsCountAggregate } from "../outputs/StatisticsCountAggregate";
import { StatisticsMaxAggregate } from "../outputs/StatisticsMaxAggregate";
import { StatisticsMinAggregate } from "../outputs/StatisticsMinAggregate";
import { StatisticsSumAggregate } from "../outputs/StatisticsSumAggregate";

@TypeGraphQL.ObjectType("StatisticsGroupBy", {
  isAbstract: true
})
export class StatisticsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excerpt!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  special_offers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reports!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rewards!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupons!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiration!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users!: string | null;

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
