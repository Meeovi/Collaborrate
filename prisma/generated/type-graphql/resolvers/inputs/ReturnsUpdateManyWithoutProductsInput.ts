import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsCreateManyProductsInputEnvelope } from "../inputs/ReturnsCreateManyProductsInputEnvelope";
import { ReturnsCreateOrConnectWithoutProductsInput } from "../inputs/ReturnsCreateOrConnectWithoutProductsInput";
import { ReturnsCreateWithoutProductsInput } from "../inputs/ReturnsCreateWithoutProductsInput";
import { ReturnsScalarWhereInput } from "../inputs/ReturnsScalarWhereInput";
import { ReturnsUpdateManyWithWhereWithoutProductsInput } from "../inputs/ReturnsUpdateManyWithWhereWithoutProductsInput";
import { ReturnsUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/ReturnsUpdateWithWhereUniqueWithoutProductsInput";
import { ReturnsUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/ReturnsUpsertWithWhereUniqueWithoutProductsInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.InputType("ReturnsUpdateManyWithoutProductsInput", {
  isAbstract: true
})
export class ReturnsUpdateManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [ReturnsCreateWithoutProductsInput], {
    nullable: true
  })
  create?: ReturnsCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: ReturnsCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: ReturnsUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => ReturnsCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: ReturnsCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  set?: ReturnsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReturnsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  delete?: ReturnsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReturnsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: ReturnsUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: ReturnsUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReturnsScalarWhereInput[] | undefined;
}
