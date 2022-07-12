import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentCreateNestedOneWithoutTransactionsInput } from "../inputs/Customer_paymentCreateNestedOneWithoutTransactionsInput";
import { OrdersCreateNestedOneWithoutTransactionsInput } from "../inputs/OrdersCreateNestedOneWithoutTransactionsInput";

@TypeGraphQL.InputType("TransactionsCreateInput", {
  isAbstract: true
})
export class TransactionsCreateInput {
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

  @TypeGraphQL.Field(_type => Customer_paymentCreateNestedOneWithoutTransactionsInput, {
    nullable: true
  })
  customer_payment?: Customer_paymentCreateNestedOneWithoutTransactionsInput | undefined;
}