import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatesAvgAggregate } from "../outputs/StatesAvgAggregate";
import { StatesCountAggregate } from "../outputs/StatesCountAggregate";
import { StatesMaxAggregate } from "../outputs/StatesMaxAggregate";
import { StatesMinAggregate } from "../outputs/StatesMinAggregate";
import { StatesSumAggregate } from "../outputs/StatesSumAggregate";

@TypeGraphQL.ObjectType("AggregateStates", {
  isAbstract: true
})
export class AggregateStates {
  @TypeGraphQL.Field(_type => StatesCountAggregate, {
    nullable: true
  })
  _count!: StatesCountAggregate | null;

  @TypeGraphQL.Field(_type => StatesAvgAggregate, {
    nullable: true
  })
  _avg!: StatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => StatesSumAggregate, {
    nullable: true
  })
  _sum!: StatesSumAggregate | null;

  @TypeGraphQL.Field(_type => StatesMinAggregate, {
    nullable: true
  })
  _min!: StatesMinAggregate | null;

  @TypeGraphQL.Field(_type => StatesMaxAggregate, {
    nullable: true
  })
  _max!: StatesMaxAggregate | null;
}
