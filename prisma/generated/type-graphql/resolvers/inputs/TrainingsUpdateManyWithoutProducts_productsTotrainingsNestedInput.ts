import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyProducts_productsTotrainingsInputEnvelope } from "../inputs/TrainingsCreateManyProducts_productsTotrainingsInputEnvelope";
import { TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput";
import { TrainingsCreateWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsCreateWithoutProducts_productsTotrainingsInput";
import { TrainingsScalarWhereInput } from "../inputs/TrainingsScalarWhereInput";
import { TrainingsUpdateManyWithWhereWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsUpdateManyWithWhereWithoutProducts_productsTotrainingsInput";
import { TrainingsUpdateWithWhereUniqueWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsUpdateWithWhereUniqueWithoutProducts_productsTotrainingsInput";
import { TrainingsUpsertWithWhereUniqueWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsUpsertWithWhereUniqueWithoutProducts_productsTotrainingsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateManyWithoutProducts_productsTotrainingsNestedInput", {
  isAbstract: true
})
export class TrainingsUpdateManyWithoutProducts_productsTotrainingsNestedInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutProducts_productsTotrainingsInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutProducts_productsTotrainingsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutProducts_productsTotrainingsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpsertWithWhereUniqueWithoutProducts_productsTotrainingsInput], {
    nullable: true
  })
  upsert?: TrainingsUpsertWithWhereUniqueWithoutProducts_productsTotrainingsInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyProducts_productsTotrainingsInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyProducts_productsTotrainingsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrainingsWhereUniqueInput], {
    nullable: true
  })
  set?: TrainingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TrainingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsWhereUniqueInput], {
    nullable: true
  })
  delete?: TrainingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsWhereUniqueInput], {
    nullable: true
  })
  connect?: TrainingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpdateWithWhereUniqueWithoutProducts_productsTotrainingsInput], {
    nullable: true
  })
  update?: TrainingsUpdateWithWhereUniqueWithoutProducts_productsTotrainingsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpdateManyWithWhereWithoutProducts_productsTotrainingsInput], {
    nullable: true
  })
  updateMany?: TrainingsUpdateManyWithWhereWithoutProducts_productsTotrainingsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrainingsScalarWhereInput[] | undefined;
}
