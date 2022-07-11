import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FullfillmentsAvgAggregate } from "../outputs/FullfillmentsAvgAggregate";
import { FullfillmentsCountAggregate } from "../outputs/FullfillmentsCountAggregate";
import { FullfillmentsMaxAggregate } from "../outputs/FullfillmentsMaxAggregate";
import { FullfillmentsMinAggregate } from "../outputs/FullfillmentsMinAggregate";
import { FullfillmentsSumAggregate } from "../outputs/FullfillmentsSumAggregate";

@TypeGraphQL.ObjectType("AggregateFullfillments", {
  isAbstract: true
})
export class AggregateFullfillments {
  @TypeGraphQL.Field(_type => FullfillmentsCountAggregate, {
    nullable: true
  })
  _count!: FullfillmentsCountAggregate | null;

  @TypeGraphQL.Field(_type => FullfillmentsAvgAggregate, {
    nullable: true
  })
  _avg!: FullfillmentsAvgAggregate | null;

  @TypeGraphQL.Field(_type => FullfillmentsSumAggregate, {
    nullable: true
  })
  _sum!: FullfillmentsSumAggregate | null;

  @TypeGraphQL.Field(_type => FullfillmentsMinAggregate, {
    nullable: true
  })
  _min!: FullfillmentsMinAggregate | null;

  @TypeGraphQL.Field(_type => FullfillmentsMaxAggregate, {
    nullable: true
  })
  _max!: FullfillmentsMaxAggregate | null;
}
