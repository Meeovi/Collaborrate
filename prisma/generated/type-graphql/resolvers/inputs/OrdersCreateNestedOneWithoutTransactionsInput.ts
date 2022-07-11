import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateOrConnectWithoutTransactionsInput } from "../inputs/OrdersCreateOrConnectWithoutTransactionsInput";
import { OrdersCreateWithoutTransactionsInput } from "../inputs/OrdersCreateWithoutTransactionsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateNestedOneWithoutTransactionsInput", {
  isAbstract: true
})
export class OrdersCreateNestedOneWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => OrdersCreateWithoutTransactionsInput, {
    nullable: true
  })
  create?: OrdersCreateWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutTransactionsInput, {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput | undefined;
}
