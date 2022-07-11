import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SourceAvgAggregate } from "../outputs/SourceAvgAggregate";
import { SourceCountAggregate } from "../outputs/SourceCountAggregate";
import { SourceMaxAggregate } from "../outputs/SourceMaxAggregate";
import { SourceMinAggregate } from "../outputs/SourceMinAggregate";
import { SourceSumAggregate } from "../outputs/SourceSumAggregate";

@TypeGraphQL.ObjectType("AggregateSource", {
  isAbstract: true
})
export class AggregateSource {
  @TypeGraphQL.Field(_type => SourceCountAggregate, {
    nullable: true
  })
  _count!: SourceCountAggregate | null;

  @TypeGraphQL.Field(_type => SourceAvgAggregate, {
    nullable: true
  })
  _avg!: SourceAvgAggregate | null;

  @TypeGraphQL.Field(_type => SourceSumAggregate, {
    nullable: true
  })
  _sum!: SourceSumAggregate | null;

  @TypeGraphQL.Field(_type => SourceMinAggregate, {
    nullable: true
  })
  _min!: SourceMinAggregate | null;

  @TypeGraphQL.Field(_type => SourceMaxAggregate, {
    nullable: true
  })
  _max!: SourceMaxAggregate | null;
}
