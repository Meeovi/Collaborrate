import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeCreateManyProductsInputEnvelope } from "../inputs/Product_attributeCreateManyProductsInputEnvelope";
import { Product_attributeCreateOrConnectWithoutProductsInput } from "../inputs/Product_attributeCreateOrConnectWithoutProductsInput";
import { Product_attributeCreateWithoutProductsInput } from "../inputs/Product_attributeCreateWithoutProductsInput";
import { Product_attributeScalarWhereInput } from "../inputs/Product_attributeScalarWhereInput";
import { Product_attributeUpdateManyWithWhereWithoutProductsInput } from "../inputs/Product_attributeUpdateManyWithWhereWithoutProductsInput";
import { Product_attributeUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Product_attributeUpdateWithWhereUniqueWithoutProductsInput";
import { Product_attributeUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Product_attributeUpsertWithWhereUniqueWithoutProductsInput";
import { Product_attributeWhereUniqueInput } from "../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.InputType("Product_attributeUpdateManyWithoutProductsInput", {
  isAbstract: true
})
export class Product_attributeUpdateManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [Product_attributeCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Product_attributeCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Product_attributeCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: Product_attributeUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_attributeCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Product_attributeCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput], {
    nullable: true
  })
  set?: Product_attributeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_attributeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_attributeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_attributeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: Product_attributeUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: Product_attributeUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_attributeScalarWhereInput[] | undefined;
}
