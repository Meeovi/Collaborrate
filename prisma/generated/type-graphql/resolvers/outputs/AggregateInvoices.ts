import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoicesAvgAggregate } from "../outputs/InvoicesAvgAggregate";
import { InvoicesCountAggregate } from "../outputs/InvoicesCountAggregate";
import { InvoicesMaxAggregate } from "../outputs/InvoicesMaxAggregate";
import { InvoicesMinAggregate } from "../outputs/InvoicesMinAggregate";
import { InvoicesSumAggregate } from "../outputs/InvoicesSumAggregate";

@TypeGraphQL.ObjectType("AggregateInvoices", {
  isAbstract: true
})
export class AggregateInvoices {
  @TypeGraphQL.Field(_type => InvoicesCountAggregate, {
    nullable: true
  })
  _count!: InvoicesCountAggregate | null;

  @TypeGraphQL.Field(_type => InvoicesAvgAggregate, {
    nullable: true
  })
  _avg!: InvoicesAvgAggregate | null;

  @TypeGraphQL.Field(_type => InvoicesSumAggregate, {
    nullable: true
  })
  _sum!: InvoicesSumAggregate | null;

  @TypeGraphQL.Field(_type => InvoicesMinAggregate, {
    nullable: true
  })
  _min!: InvoicesMinAggregate | null;

  @TypeGraphQL.Field(_type => InvoicesMaxAggregate, {
    nullable: true
  })
  _max!: InvoicesMaxAggregate | null;
}
