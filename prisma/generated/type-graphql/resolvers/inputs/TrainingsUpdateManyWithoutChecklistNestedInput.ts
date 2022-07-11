import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyChecklistInputEnvelope } from "../inputs/TrainingsCreateManyChecklistInputEnvelope";
import { TrainingsCreateOrConnectWithoutChecklistInput } from "../inputs/TrainingsCreateOrConnectWithoutChecklistInput";
import { TrainingsCreateWithoutChecklistInput } from "../inputs/TrainingsCreateWithoutChecklistInput";
import { TrainingsScalarWhereInput } from "../inputs/TrainingsScalarWhereInput";
import { TrainingsUpdateManyWithWhereWithoutChecklistInput } from "../inputs/TrainingsUpdateManyWithWhereWithoutChecklistInput";
import { TrainingsUpdateWithWhereUniqueWithoutChecklistInput } from "../inputs/TrainingsUpdateWithWhereUniqueWithoutChecklistInput";
import { TrainingsUpsertWithWhereUniqueWithoutChecklistInput } from "../inputs/TrainingsUpsertWithWhereUniqueWithoutChecklistInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateManyWithoutChecklistNestedInput", {
  isAbstract: true
})
export class TrainingsUpdateManyWithoutChecklistNestedInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutChecklistInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutChecklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutChecklistInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutChecklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpsertWithWhereUniqueWithoutChecklistInput], {
    nullable: true
  })
  upsert?: TrainingsUpsertWithWhereUniqueWithoutChecklistInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyChecklistInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyChecklistInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TrainingsUpdateWithWhereUniqueWithoutChecklistInput], {
    nullable: true
  })
  update?: TrainingsUpdateWithWhereUniqueWithoutChecklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpdateManyWithWhereWithoutChecklistInput], {
    nullable: true
  })
  updateMany?: TrainingsUpdateManyWithWhereWithoutChecklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrainingsScalarWhereInput[] | undefined;
}
