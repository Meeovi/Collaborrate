import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateOrConnectWithoutQuotesInput } from "../inputs/OrdersCreateOrConnectWithoutQuotesInput";
import { OrdersCreateWithoutQuotesInput } from "../inputs/OrdersCreateWithoutQuotesInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateNestedOneWithoutQuotesInput", {
  isAbstract: true
})
export class OrdersCreateNestedOneWithoutQuotesInput {
  @TypeGraphQL.Field(_type => OrdersCreateWithoutQuotesInput, {
    nullable: true
  })
  create?: OrdersCreateWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutQuotesInput, {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput | undefined;
}
