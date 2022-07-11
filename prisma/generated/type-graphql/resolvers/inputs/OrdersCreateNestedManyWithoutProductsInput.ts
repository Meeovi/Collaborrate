import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyProductsInputEnvelope } from "../inputs/OrdersCreateManyProductsInputEnvelope";
import { OrdersCreateOrConnectWithoutProductsInput } from "../inputs/OrdersCreateOrConnectWithoutProductsInput";
import { OrdersCreateWithoutProductsInput } from "../inputs/OrdersCreateWithoutProductsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class OrdersCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [OrdersCreateWithoutProductsInput], {
    nullable: true
  })
  create?: OrdersCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: OrdersCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput[] | undefined;
}
