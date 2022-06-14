import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyCustomersInputEnvelope } from "../inputs/OrdersCreateManyCustomersInputEnvelope";
import { OrdersCreateOrConnectWithoutCustomersInput } from "../inputs/OrdersCreateOrConnectWithoutCustomersInput";
import { OrdersCreateWithoutCustomersInput } from "../inputs/OrdersCreateWithoutCustomersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class OrdersCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [OrdersCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: OrdersCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: OrdersCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput[] | undefined;
}
