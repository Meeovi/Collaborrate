import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateNestedOneWithoutTransactionsInput } from "../inputs/OrdersCreateNestedOneWithoutTransactionsInput";

@TypeGraphQL.InputType("TransactionsCreateWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class TransactionsCreateWithoutCustomer_paymentInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  transaction_id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  parent_transaction_id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  closed?: string | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateNestedOneWithoutTransactionsInput, {
    nullable: true
  })
  orders?: OrdersCreateNestedOneWithoutTransactionsInput | undefined;
}
