import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutTransactionsInput } from "../inputs/OrdersCreateWithoutTransactionsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateOrConnectWithoutTransactionsInput", {
  isAbstract: true
})
export class OrdersCreateOrConnectWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutTransactionsInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutTransactionsInput;
}
