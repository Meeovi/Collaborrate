import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsAvgAggregate } from "../outputs/ReturnsAvgAggregate";
import { ReturnsCountAggregate } from "../outputs/ReturnsCountAggregate";
import { ReturnsMaxAggregate } from "../outputs/ReturnsMaxAggregate";
import { ReturnsMinAggregate } from "../outputs/ReturnsMinAggregate";
import { ReturnsSumAggregate } from "../outputs/ReturnsSumAggregate";

@TypeGraphQL.ObjectType("AggregateReturns", {
  isAbstract: true
})
export class AggregateReturns {
  @TypeGraphQL.Field(_type => ReturnsCountAggregate, {
    nullable: true
  })
  _count!: ReturnsCountAggregate | null;

  @TypeGraphQL.Field(_type => ReturnsAvgAggregate, {
    nullable: true
  })
  _avg!: ReturnsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReturnsSumAggregate, {
    nullable: true
  })
  _sum!: ReturnsSumAggregate | null;

  @TypeGraphQL.Field(_type => ReturnsMinAggregate, {
    nullable: true
  })
  _min!: ReturnsMinAggregate | null;

  @TypeGraphQL.Field(_type => ReturnsMaxAggregate, {
    nullable: true
  })
  _max!: ReturnsMaxAggregate | null;
}
