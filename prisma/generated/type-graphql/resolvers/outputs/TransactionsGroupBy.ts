import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsAvgAggregate } from "../outputs/TransactionsAvgAggregate";
import { TransactionsCountAggregate } from "../outputs/TransactionsCountAggregate";
import { TransactionsMaxAggregate } from "../outputs/TransactionsMaxAggregate";
import { TransactionsMinAggregate } from "../outputs/TransactionsMinAggregate";
import { TransactionsSumAggregate } from "../outputs/TransactionsSumAggregate";

@TypeGraphQL.ObjectType("TransactionsGroupBy", {
  isAbstract: true
})
export class TransactionsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  transaction_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  parent_transaction_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created!: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  payment_method!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  closed!: string | null;

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
