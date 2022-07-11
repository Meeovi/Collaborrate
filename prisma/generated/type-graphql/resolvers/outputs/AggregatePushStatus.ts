import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PushStatusAvgAggregate } from "../outputs/PushStatusAvgAggregate";
import { PushStatusCountAggregate } from "../outputs/PushStatusCountAggregate";
import { PushStatusMaxAggregate } from "../outputs/PushStatusMaxAggregate";
import { PushStatusMinAggregate } from "../outputs/PushStatusMinAggregate";
import { PushStatusSumAggregate } from "../outputs/PushStatusSumAggregate";

@TypeGraphQL.ObjectType("AggregatePushStatus", {
  isAbstract: true
})
export class AggregatePushStatus {
  @TypeGraphQL.Field(_type => PushStatusCountAggregate, {
    nullable: true
  })
  _count!: PushStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => PushStatusAvgAggregate, {
    nullable: true
  })
  _avg!: PushStatusAvgAggregate | null;

  @TypeGraphQL.Field(_type => PushStatusSumAggregate, {
    nullable: true
  })
  _sum!: PushStatusSumAggregate | null;

  @TypeGraphQL.Field(_type => PushStatusMinAggregate, {
    nullable: true
  })
  _min!: PushStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => PushStatusMaxAggregate, {
    nullable: true
  })
  _max!: PushStatusMaxAggregate | null;
}
