import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsAvgAggregate } from "../outputs/OccassionsAvgAggregate";
import { OccassionsCountAggregate } from "../outputs/OccassionsCountAggregate";
import { OccassionsMaxAggregate } from "../outputs/OccassionsMaxAggregate";
import { OccassionsMinAggregate } from "../outputs/OccassionsMinAggregate";
import { OccassionsSumAggregate } from "../outputs/OccassionsSumAggregate";

@TypeGraphQL.ObjectType("AggregateOccassions", {
  isAbstract: true
})
export class AggregateOccassions {
  @TypeGraphQL.Field(_type => OccassionsCountAggregate, {
    nullable: true
  })
  _count!: OccassionsCountAggregate | null;

  @TypeGraphQL.Field(_type => OccassionsAvgAggregate, {
    nullable: true
  })
  _avg!: OccassionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => OccassionsSumAggregate, {
    nullable: true
  })
  _sum!: OccassionsSumAggregate | null;

  @TypeGraphQL.Field(_type => OccassionsMinAggregate, {
    nullable: true
  })
  _min!: OccassionsMinAggregate | null;

  @TypeGraphQL.Field(_type => OccassionsMaxAggregate, {
    nullable: true
  })
  _max!: OccassionsMaxAggregate | null;
}
