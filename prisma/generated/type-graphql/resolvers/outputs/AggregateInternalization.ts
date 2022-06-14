import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InternalizationAvgAggregate } from "../outputs/InternalizationAvgAggregate";
import { InternalizationCountAggregate } from "../outputs/InternalizationCountAggregate";
import { InternalizationMaxAggregate } from "../outputs/InternalizationMaxAggregate";
import { InternalizationMinAggregate } from "../outputs/InternalizationMinAggregate";
import { InternalizationSumAggregate } from "../outputs/InternalizationSumAggregate";

@TypeGraphQL.ObjectType("AggregateInternalization", {
  isAbstract: true
})
export class AggregateInternalization {
  @TypeGraphQL.Field(_type => InternalizationCountAggregate, {
    nullable: true
  })
  _count!: InternalizationCountAggregate | null;

  @TypeGraphQL.Field(_type => InternalizationAvgAggregate, {
    nullable: true
  })
  _avg!: InternalizationAvgAggregate | null;

  @TypeGraphQL.Field(_type => InternalizationSumAggregate, {
    nullable: true
  })
  _sum!: InternalizationSumAggregate | null;

  @TypeGraphQL.Field(_type => InternalizationMinAggregate, {
    nullable: true
  })
  _min!: InternalizationMinAggregate | null;

  @TypeGraphQL.Field(_type => InternalizationMaxAggregate, {
    nullable: true
  })
  _max!: InternalizationMaxAggregate | null;
}
