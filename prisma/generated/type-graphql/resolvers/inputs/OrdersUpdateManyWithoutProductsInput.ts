import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyProductsInputEnvelope } from "../inputs/OrdersCreateManyProductsInputEnvelope";
import { OrdersCreateOrConnectWithoutProductsInput } from "../inputs/OrdersCreateOrConnectWithoutProductsInput";
import { OrdersCreateWithoutProductsInput } from "../inputs/OrdersCreateWithoutProductsInput";
import { OrdersScalarWhereInput } from "../inputs/OrdersScalarWhereInput";
import { OrdersUpdateManyWithWhereWithoutProductsInput } from "../inputs/OrdersUpdateManyWithWhereWithoutProductsInput";
import { OrdersUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/OrdersUpdateWithWhereUniqueWithoutProductsInput";
import { OrdersUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/OrdersUpsertWithWhereUniqueWithoutProductsInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateManyWithoutProductsInput", {
  isAbstract: true
})
export class OrdersUpdateManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [OrdersCreateWithoutProductsInput], {
    nullable: true
  })
  create?: OrdersCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: OrdersUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: OrdersCreateManyProductsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OrdersUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: OrdersUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: OrdersUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrdersScalarWhereInput[] | undefined;
}
