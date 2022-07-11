import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutProductsInput } from "../inputs/OrdersCreateWithoutProductsInput";
import { OrdersUpdateWithoutProductsInput } from "../inputs/OrdersUpdateWithoutProductsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpsertWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class OrdersUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: OrdersUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutProductsInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutProductsInput;
}
