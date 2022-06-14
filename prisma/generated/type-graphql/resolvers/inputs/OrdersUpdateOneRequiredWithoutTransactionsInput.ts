import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateOrConnectWithoutTransactionsInput } from "../inputs/OrdersCreateOrConnectWithoutTransactionsInput";
import { OrdersCreateWithoutTransactionsInput } from "../inputs/OrdersCreateWithoutTransactionsInput";
import { OrdersUpdateWithoutTransactionsInput } from "../inputs/OrdersUpdateWithoutTransactionsInput";
import { OrdersUpsertWithoutTransactionsInput } from "../inputs/OrdersUpsertWithoutTransactionsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateOneRequiredWithoutTransactionsInput", {
  isAbstract: true
})
export class OrdersUpdateOneRequiredWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => OrdersCreateWithoutTransactionsInput, {
    nullable: true
  })
  create?: OrdersCreateWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutTransactionsInput, {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpsertWithoutTransactionsInput, {
    nullable: true
  })
  upsert?: OrdersUpsertWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutTransactionsInput, {
    nullable: true
  })
  update?: OrdersUpdateWithoutTransactionsInput | undefined;
}
