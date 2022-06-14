import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateManyProductsInputEnvelope } from "../inputs/ProductsCreateManyProductsInputEnvelope";
import { ProductsCreateOrConnectWithoutProductsInput } from "../inputs/ProductsCreateOrConnectWithoutProductsInput";
import { ProductsCreateWithoutProductsInput } from "../inputs/ProductsCreateWithoutProductsInput";
import { ProductsScalarWhereInput } from "../inputs/ProductsScalarWhereInput";
import { ProductsUpdateManyWithWhereWithoutProductsInput } from "../inputs/ProductsUpdateManyWithWhereWithoutProductsInput";
import { ProductsUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/ProductsUpdateWithWhereUniqueWithoutProductsInput";
import { ProductsUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/ProductsUpsertWithWhereUniqueWithoutProductsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateManyWithoutProductsInput", {
  isAbstract: true
})
export class ProductsUpdateManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [ProductsCreateWithoutProductsInput], {
    nullable: true
  })
  create?: ProductsCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: ProductsUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: ProductsCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  set?: ProductsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: ProductsUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: ProductsUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductsScalarWhereInput[] | undefined;
}
