import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateWithoutQuotesInput } from "../inputs/OrdersCreateWithoutQuotesInput";
import { OrdersUpdateWithoutQuotesInput } from "../inputs/OrdersUpdateWithoutQuotesInput";

@TypeGraphQL.InputType("OrdersUpsertWithoutQuotesInput", {
  isAbstract: true
})
export class OrdersUpsertWithoutQuotesInput {
  @TypeGraphQL.Field(_type => OrdersUpdateWithoutQuotesInput, {
    nullable: false
  })
  update!: OrdersUpdateWithoutQuotesInput;

  @TypeGraphQL.Field(_type => OrdersCreateWithoutQuotesInput, {
    nullable: false
  })
  create!: OrdersCreateWithoutQuotesInput;
}
