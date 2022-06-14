import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesAvgAggregate } from "../outputs/QuotesAvgAggregate";
import { QuotesCountAggregate } from "../outputs/QuotesCountAggregate";
import { QuotesMaxAggregate } from "../outputs/QuotesMaxAggregate";
import { QuotesMinAggregate } from "../outputs/QuotesMinAggregate";
import { QuotesSumAggregate } from "../outputs/QuotesSumAggregate";

@TypeGraphQL.ObjectType("AggregateQuotes", {
  isAbstract: true
})
export class AggregateQuotes {
  @TypeGraphQL.Field(_type => QuotesCountAggregate, {
    nullable: true
  })
  _count!: QuotesCountAggregate | null;

  @TypeGraphQL.Field(_type => QuotesAvgAggregate, {
    nullable: true
  })
  _avg!: QuotesAvgAggregate | null;

  @TypeGraphQL.Field(_type => QuotesSumAggregate, {
    nullable: true
  })
  _sum!: QuotesSumAggregate | null;

  @TypeGraphQL.Field(_type => QuotesMinAggregate, {
    nullable: true
  })
  _min!: QuotesMinAggregate | null;

  @TypeGraphQL.Field(_type => QuotesMaxAggregate, {
    nullable: true
  })
  _max!: QuotesMaxAggregate | null;
}
