import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SegmentsAvgAggregate } from "../outputs/SegmentsAvgAggregate";
import { SegmentsCountAggregate } from "../outputs/SegmentsCountAggregate";
import { SegmentsMaxAggregate } from "../outputs/SegmentsMaxAggregate";
import { SegmentsMinAggregate } from "../outputs/SegmentsMinAggregate";
import { SegmentsSumAggregate } from "../outputs/SegmentsSumAggregate";

@TypeGraphQL.ObjectType("AggregateSegments", {
  isAbstract: true
})
export class AggregateSegments {
  @TypeGraphQL.Field(_type => SegmentsCountAggregate, {
    nullable: true
  })
  _count!: SegmentsCountAggregate | null;

  @TypeGraphQL.Field(_type => SegmentsAvgAggregate, {
    nullable: true
  })
  _avg!: SegmentsAvgAggregate | null;

  @TypeGraphQL.Field(_type => SegmentsSumAggregate, {
    nullable: true
  })
  _sum!: SegmentsSumAggregate | null;

  @TypeGraphQL.Field(_type => SegmentsMinAggregate, {
    nullable: true
  })
  _min!: SegmentsMinAggregate | null;

  @TypeGraphQL.Field(_type => SegmentsMaxAggregate, {
    nullable: true
  })
  _max!: SegmentsMaxAggregate | null;
}
