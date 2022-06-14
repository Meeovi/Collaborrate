import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerCreateManyProductsInputEnvelope } from "../inputs/ManufacturerCreateManyProductsInputEnvelope";
import { ManufacturerCreateOrConnectWithoutProductsInput } from "../inputs/ManufacturerCreateOrConnectWithoutProductsInput";
import { ManufacturerCreateWithoutProductsInput } from "../inputs/ManufacturerCreateWithoutProductsInput";
import { ManufacturerScalarWhereInput } from "../inputs/ManufacturerScalarWhereInput";
import { ManufacturerUpdateManyWithWhereWithoutProductsInput } from "../inputs/ManufacturerUpdateManyWithWhereWithoutProductsInput";
import { ManufacturerUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/ManufacturerUpdateWithWhereUniqueWithoutProductsInput";
import { ManufacturerUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/ManufacturerUpsertWithWhereUniqueWithoutProductsInput";
import { ManufacturerWhereUniqueInput } from "../inputs/ManufacturerWhereUniqueInput";

@TypeGraphQL.InputType("ManufacturerUpdateManyWithoutProductsInput", {
  isAbstract: true
})
export class ManufacturerUpdateManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [ManufacturerCreateWithoutProductsInput], {
    nullable: true
  })
  create?: ManufacturerCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: ManufacturerCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: ManufacturerUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => ManufacturerCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: ManufacturerCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerWhereUniqueInput], {
    nullable: true
  })
  set?: ManufacturerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ManufacturerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerWhereUniqueInput], {
    nullable: true
  })
  delete?: ManufacturerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerWhereUniqueInput], {
    nullable: true
  })
  connect?: ManufacturerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: ManufacturerUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: ManufacturerUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ManufacturerScalarWhereInput[] | undefined;
}
