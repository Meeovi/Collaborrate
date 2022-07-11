import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyCountriesInputEnvelope } from "../inputs/TrainingsCreateManyCountriesInputEnvelope";
import { TrainingsCreateOrConnectWithoutCountriesInput } from "../inputs/TrainingsCreateOrConnectWithoutCountriesInput";
import { TrainingsCreateWithoutCountriesInput } from "../inputs/TrainingsCreateWithoutCountriesInput";
import { TrainingsScalarWhereInput } from "../inputs/TrainingsScalarWhereInput";
import { TrainingsUpdateManyWithWhereWithoutCountriesInput } from "../inputs/TrainingsUpdateManyWithWhereWithoutCountriesInput";
import { TrainingsUpdateWithWhereUniqueWithoutCountriesInput } from "../inputs/TrainingsUpdateWithWhereUniqueWithoutCountriesInput";
import { TrainingsUpsertWithWhereUniqueWithoutCountriesInput } from "../inputs/TrainingsUpsertWithWhereUniqueWithoutCountriesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateManyWithoutCountriesNestedInput", {
  isAbstract: true
})
export class TrainingsUpdateManyWithoutCountriesNestedInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutCountriesInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutCountriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutCountriesInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutCountriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpsertWithWhereUniqueWithoutCountriesInput], {
    nullable: true
  })
  upsert?: TrainingsUpsertWithWhereUniqueWithoutCountriesInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyCountriesInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyCountriesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TrainingsUpdateWithWhereUniqueWithoutCountriesInput], {
    nullable: true
  })
  update?: TrainingsUpdateWithWhereUniqueWithoutCountriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpdateManyWithWhereWithoutCountriesInput], {
    nullable: true
  })
  updateMany?: TrainingsUpdateManyWithWhereWithoutCountriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrainingsScalarWhereInput[] | undefined;
}
