import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersUpdateWithoutCustomersInput } from "../inputs/OrdersUpdateWithoutCustomersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class OrdersUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: OrdersUpdateWithoutCustomersInput;
}
