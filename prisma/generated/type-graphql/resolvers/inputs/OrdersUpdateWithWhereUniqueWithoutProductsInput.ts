import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersUpdateWithoutProductsInput } from "../inputs/OrdersUpdateWithoutProductsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class OrdersUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: OrdersUpdateWithoutProductsInput;
}
