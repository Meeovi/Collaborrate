import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulerAvgAggregate } from "../outputs/SchedulerAvgAggregate";
import { SchedulerCountAggregate } from "../outputs/SchedulerCountAggregate";
import { SchedulerMaxAggregate } from "../outputs/SchedulerMaxAggregate";
import { SchedulerMinAggregate } from "../outputs/SchedulerMinAggregate";
import { SchedulerSumAggregate } from "../outputs/SchedulerSumAggregate";

@TypeGraphQL.ObjectType("SchedulerGroupBy", {
  isAbstract: true
})
export class SchedulerGroupBy {
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
  end_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whid!: string | null;

  @TypeGraphQL.Field(_type => SchedulerCountAggregate, {
    nullable: true
  })
  _count!: SchedulerCountAggregate | null;

  @TypeGraphQL.Field(_type => SchedulerAvgAggregate, {
    nullable: true
  })
  _avg!: SchedulerAvgAggregate | null;

  @TypeGraphQL.Field(_type => SchedulerSumAggregate, {
    nullable: true
  })
  _sum!: SchedulerSumAggregate | null;

  @TypeGraphQL.Field(_type => SchedulerMinAggregate, {
    nullable: true
  })
  _min!: SchedulerMinAggregate | null;

  @TypeGraphQL.Field(_type => SchedulerMaxAggregate, {
    nullable: true
  })
  _max!: SchedulerMaxAggregate | null;
}
