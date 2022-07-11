import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyCustomersInputEnvelope } from "../inputs/OrdersCreateManyCustomersInputEnvelope";
import { OrdersCreateOrConnectWithoutCustomersInput } from "../inputs/OrdersCreateOrConnectWithoutCustomersInput";
import { OrdersCreateWithoutCustomersInput } from "../inputs/OrdersCreateWithoutCustomersInput";
import { OrdersScalarWhereInput } from "../inputs/OrdersScalarWhereInput";
import { OrdersUpdateManyWithWhereWithoutCustomersInput } from "../inputs/OrdersUpdateManyWithWhereWithoutCustomersInput";
import { OrdersUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/OrdersUpdateWithWhereUniqueWithoutCustomersInput";
import { OrdersUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/OrdersUpsertWithWhereUniqueWithoutCustomersInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateManyWithoutCustomersNestedInput", {
  isAbstract: true
})
export class OrdersUpdateManyWithoutCustomersNestedInput {
  @TypeGraphQL.Field(_type => [OrdersCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: OrdersCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: OrdersUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: OrdersCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  set?: OrdersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrdersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  delete?: OrdersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersWhereUniqueInput], {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: OrdersUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: OrdersUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrdersScalarWhereInput[] | undefined;
}
