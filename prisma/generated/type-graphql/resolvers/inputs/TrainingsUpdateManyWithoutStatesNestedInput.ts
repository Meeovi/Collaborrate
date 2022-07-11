import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyStatesInputEnvelope } from "../inputs/TrainingsCreateManyStatesInputEnvelope";
import { TrainingsCreateOrConnectWithoutStatesInput } from "../inputs/TrainingsCreateOrConnectWithoutStatesInput";
import { TrainingsCreateWithoutStatesInput } from "../inputs/TrainingsCreateWithoutStatesInput";
import { TrainingsScalarWhereInput } from "../inputs/TrainingsScalarWhereInput";
import { TrainingsUpdateManyWithWhereWithoutStatesInput } from "../inputs/TrainingsUpdateManyWithWhereWithoutStatesInput";
import { TrainingsUpdateWithWhereUniqueWithoutStatesInput } from "../inputs/TrainingsUpdateWithWhereUniqueWithoutStatesInput";
import { TrainingsUpsertWithWhereUniqueWithoutStatesInput } from "../inputs/TrainingsUpsertWithWhereUniqueWithoutStatesInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateManyWithoutStatesNestedInput", {
  isAbstract: true
})
export class TrainingsUpdateManyWithoutStatesNestedInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutStatesInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutStatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutStatesInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutStatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpsertWithWhereUniqueWithoutStatesInput], {
    nullable: true
  })
  upsert?: TrainingsUpsertWithWhereUniqueWithoutStatesInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyStatesInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyStatesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TrainingsUpdateWithWhereUniqueWithoutStatesInput], {
    nullable: true
  })
  update?: TrainingsUpdateWithWhereUniqueWithoutStatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpdateManyWithWhereWithoutStatesInput], {
    nullable: true
  })
  updateMany?: TrainingsUpdateManyWithWhereWithoutStatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrainingsScalarWhereInput[] | undefined;
}
