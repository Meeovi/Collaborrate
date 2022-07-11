import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsAvgAggregate } from "../outputs/TrainingsAvgAggregate";
import { TrainingsCountAggregate } from "../outputs/TrainingsCountAggregate";
import { TrainingsMaxAggregate } from "../outputs/TrainingsMaxAggregate";
import { TrainingsMinAggregate } from "../outputs/TrainingsMinAggregate";
import { TrainingsSumAggregate } from "../outputs/TrainingsSumAggregate";

@TypeGraphQL.ObjectType("AggregateTrainings", {
  isAbstract: true
})
export class AggregateTrainings {
  @TypeGraphQL.Field(_type => TrainingsCountAggregate, {
    nullable: true
  })
  _count!: TrainingsCountAggregate | null;

  @TypeGraphQL.Field(_type => TrainingsAvgAggregate, {
    nullable: true
  })
  _avg!: TrainingsAvgAggregate | null;

  @TypeGraphQL.Field(_type => TrainingsSumAggregate, {
    nullable: true
  })
  _sum!: TrainingsSumAggregate | null;

  @TypeGraphQL.Field(_type => TrainingsMinAggregate, {
    nullable: true
  })
  _min!: TrainingsMinAggregate | null;

  @TypeGraphQL.Field(_type => TrainingsMaxAggregate, {
    nullable: true
  })
  _max!: TrainingsMaxAggregate | null;
}
