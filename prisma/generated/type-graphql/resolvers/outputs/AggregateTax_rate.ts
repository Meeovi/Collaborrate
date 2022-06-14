import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_rateAvgAggregate } from "../outputs/Tax_rateAvgAggregate";
import { Tax_rateCountAggregate } from "../outputs/Tax_rateCountAggregate";
import { Tax_rateMaxAggregate } from "../outputs/Tax_rateMaxAggregate";
import { Tax_rateMinAggregate } from "../outputs/Tax_rateMinAggregate";
import { Tax_rateSumAggregate } from "../outputs/Tax_rateSumAggregate";

@TypeGraphQL.ObjectType("AggregateTax_rate", {
  isAbstract: true
})
export class AggregateTax_rate {
  @TypeGraphQL.Field(_type => Tax_rateCountAggregate, {
    nullable: true
  })
  _count!: Tax_rateCountAggregate | null;

  @TypeGraphQL.Field(_type => Tax_rateAvgAggregate, {
    nullable: true
  })
  _avg!: Tax_rateAvgAggregate | null;

  @TypeGraphQL.Field(_type => Tax_rateSumAggregate, {
    nullable: true
  })
  _sum!: Tax_rateSumAggregate | null;

  @TypeGraphQL.Field(_type => Tax_rateMinAggregate, {
    nullable: true
  })
  _min!: Tax_rateMinAggregate | null;

  @TypeGraphQL.Field(_type => Tax_rateMaxAggregate, {
    nullable: true
  })
  _max!: Tax_rateMaxAggregate | null;
}
