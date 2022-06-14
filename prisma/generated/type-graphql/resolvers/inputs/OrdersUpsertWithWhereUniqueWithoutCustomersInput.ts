import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutCustomersInput } from "../inputs/OrdersCreateWithoutCustomersInput";
import { OrdersUpdateWithoutCustomersInput } from "../inputs/OrdersUpdateWithoutCustomersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpsertWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class OrdersUpsertWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: OrdersUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutCustomersInput;
}
