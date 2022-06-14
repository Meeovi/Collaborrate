import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutProductsInput } from "../inputs/OrdersCreateWithoutProductsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateOrConnectWithoutProductsInput", {
  isAbstract: true
})
export class OrdersCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutProductsInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutProductsInput;
}
