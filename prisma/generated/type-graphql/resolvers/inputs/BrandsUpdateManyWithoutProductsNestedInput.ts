import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateManyProductsInputEnvelope } from "../inputs/BrandsCreateManyProductsInputEnvelope";
import { BrandsCreateOrConnectWithoutProductsInput } from "../inputs/BrandsCreateOrConnectWithoutProductsInput";
import { BrandsCreateWithoutProductsInput } from "../inputs/BrandsCreateWithoutProductsInput";
import { BrandsScalarWhereInput } from "../inputs/BrandsScalarWhereInput";
import { BrandsUpdateManyWithWhereWithoutProductsInput } from "../inputs/BrandsUpdateManyWithWhereWithoutProductsInput";
import { BrandsUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/BrandsUpdateWithWhereUniqueWithoutProductsInput";
import { BrandsUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/BrandsUpsertWithWhereUniqueWithoutProductsInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsUpdateManyWithoutProductsNestedInput", {
  isAbstract: true
})
export class BrandsUpdateManyWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => [BrandsCreateWithoutProductsInput], {
    nullable: true
  })
  create?: BrandsCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: BrandsUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => BrandsCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: BrandsCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BrandsWhereUniqueInput], {
    nullable: true
  })
  set?: BrandsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BrandsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsWhereUniqueInput], {
    nullable: true
  })
  delete?: BrandsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsWhereUniqueInput], {
    nullable: true
  })
  connect?: BrandsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: BrandsUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: BrandsUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BrandsScalarWhereInput[] | undefined;
}
