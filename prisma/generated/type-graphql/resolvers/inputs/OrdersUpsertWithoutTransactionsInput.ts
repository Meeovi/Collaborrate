import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutTransactionsInput } from "../inputs/OrdersCreateWithoutTransactionsInput";
import { OrdersUpdateWithoutTransactionsInput } from "../inputs/OrdersUpdateWithoutTransactionsInput";

@TypeGraphQL.InputType("OrdersUpsertWithoutTransactionsInput", {
  isAbstract: true
})
export class OrdersUpsertWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => OrdersUpdateWithoutTransactionsInput, {
    nullable: false
  })
  update!: OrdersUpdateWithoutTransactionsInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutTransactionsInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutTransactionsInput;
}
