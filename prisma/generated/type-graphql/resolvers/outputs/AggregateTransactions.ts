import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsAvgAggregate } from "../outputs/TransactionsAvgAggregate";
import { TransactionsCountAggregate } from "../outputs/TransactionsCountAggregate";
import { TransactionsMaxAggregate } from "../outputs/TransactionsMaxAggregate";
import { TransactionsMinAggregate } from "../outputs/TransactionsMinAggregate";
import { TransactionsSumAggregate } from "../outputs/TransactionsSumAggregate";

@TypeGraphQL.ObjectType("AggregateTransactions", {
  isAbstract: true
})
export class AggregateTransactions {
  @TypeGraphQL.Field(_type => TransactionsCountAggregate, {
    nullable: true
  })
  _count!: TransactionsCountAggregate | null;

  @TypeGraphQL.Field(_type => TransactionsAvgAggregate, {
    nullable: true
  })
  _avg!: TransactionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => TransactionsSumAggregate, {
    nullable: true
  })
  _sum!: TransactionsSumAggregate | null;

  @TypeGraphQL.Field(_type => TransactionsMinAggregate, {
    nullable: true
  })
  _min!: TransactionsMinAggregate | null;

  @TypeGraphQL.Field(_type => TransactionsMaxAggregate, {
    nullable: true
  })
  _max!: TransactionsMaxAggregate | null;
}
