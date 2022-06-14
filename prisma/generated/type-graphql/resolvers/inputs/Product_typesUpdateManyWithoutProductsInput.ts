import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesCreateManyProductsInputEnvelope } from "../inputs/Product_typesCreateManyProductsInputEnvelope";
import { Product_typesCreateOrConnectWithoutProductsInput } from "../inputs/Product_typesCreateOrConnectWithoutProductsInput";
import { Product_typesCreateWithoutProductsInput } from "../inputs/Product_typesCreateWithoutProductsInput";
import { Product_typesScalarWhereInput } from "../inputs/Product_typesScalarWhereInput";
import { Product_typesUpdateManyWithWhereWithoutProductsInput } from "../inputs/Product_typesUpdateManyWithWhereWithoutProductsInput";
import { Product_typesUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Product_typesUpdateWithWhereUniqueWithoutProductsInput";
import { Product_typesUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Product_typesUpsertWithWhereUniqueWithoutProductsInput";
import { Product_typesWhereUniqueInput } from "../inputs/Product_typesWhereUniqueInput";

@TypeGraphQL.InputType("Product_typesUpdateManyWithoutProductsInput", {
  isAbstract: true
})
export class Product_typesUpdateManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [Product_typesCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Product_typesCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Product_typesCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: Product_typesUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_typesCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Product_typesCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_typesWhereUniqueInput], {
    nullable: true
  })
  set?: Product_typesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_typesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_typesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_typesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: Product_typesUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: Product_typesUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_typesScalarWhereInput[] | undefined;
}
