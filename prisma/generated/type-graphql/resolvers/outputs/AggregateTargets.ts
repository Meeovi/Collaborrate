import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TargetsAvgAggregate } from "../outputs/TargetsAvgAggregate";
import { TargetsCountAggregate } from "../outputs/TargetsCountAggregate";
import { TargetsMaxAggregate } from "../outputs/TargetsMaxAggregate";
import { TargetsMinAggregate } from "../outputs/TargetsMinAggregate";
import { TargetsSumAggregate } from "../outputs/TargetsSumAggregate";

@TypeGraphQL.ObjectType("AggregateTargets", {
  isAbstract: true
})
export class AggregateTargets {
  @TypeGraphQL.Field(_type => TargetsCountAggregate, {
    nullable: true
  })
  _count!: TargetsCountAggregate | null;

  @TypeGraphQL.Field(_type => TargetsAvgAggregate, {
    nullable: true
  })
  _avg!: TargetsAvgAggregate | null;

  @TypeGraphQL.Field(_type => TargetsSumAggregate, {
    nullable: true
  })
  _sum!: TargetsSumAggregate | null;

  @TypeGraphQL.Field(_type => TargetsMinAggregate, {
    nullable: true
  })
  _min!: TargetsMinAggregate | null;

  @TypeGraphQL.Field(_type => TargetsMaxAggregate, {
    nullable: true
  })
  _max!: TargetsMaxAggregate | null;
}
