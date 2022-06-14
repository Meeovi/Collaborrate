import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollsAvgAggregate } from "../outputs/PollsAvgAggregate";
import { PollsCountAggregate } from "../outputs/PollsCountAggregate";
import { PollsMaxAggregate } from "../outputs/PollsMaxAggregate";
import { PollsMinAggregate } from "../outputs/PollsMinAggregate";
import { PollsSumAggregate } from "../outputs/PollsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePolls", {
  isAbstract: true
})
export class AggregatePolls {
  @TypeGraphQL.Field(_type => PollsCountAggregate, {
    nullable: true
  })
  _count!: PollsCountAggregate | null;

  @TypeGraphQL.Field(_type => PollsAvgAggregate, {
    nullable: true
  })
  _avg!: PollsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PollsSumAggregate, {
    nullable: true
  })
  _sum!: PollsSumAggregate | null;

  @TypeGraphQL.Field(_type => PollsMinAggregate, {
    nullable: true
  })
  _min!: PollsMinAggregate | null;

  @TypeGraphQL.Field(_type => PollsMaxAggregate, {
    nullable: true
  })
  _max!: PollsMaxAggregate | null;
}
