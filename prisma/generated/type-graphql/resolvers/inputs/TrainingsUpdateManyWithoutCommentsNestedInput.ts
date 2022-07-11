import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TrainingsCreateManyCommentsInputEnvelope } from "../inputs/TrainingsCreateManyCommentsInputEnvelope";
import { TrainingsCreateOrConnectWithoutCommentsInput } from "../inputs/TrainingsCreateOrConnectWithoutCommentsInput";
import { TrainingsCreateWithoutCommentsInput } from "../inputs/TrainingsCreateWithoutCommentsInput";
import { TrainingsScalarWhereInput } from "../inputs/TrainingsScalarWhereInput";
import { TrainingsUpdateManyWithWhereWithoutCommentsInput } from "../inputs/TrainingsUpdateManyWithWhereWithoutCommentsInput";
import { TrainingsUpdateWithWhereUniqueWithoutCommentsInput } from "../inputs/TrainingsUpdateWithWhereUniqueWithoutCommentsInput";
import { TrainingsUpsertWithWhereUniqueWithoutCommentsInput } from "../inputs/TrainingsUpsertWithWhereUniqueWithoutCommentsInput";
import { TrainingsWhereUniqueInput } from "../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.InputType("TrainingsUpdateManyWithoutCommentsNestedInput", {
  isAbstract: true
})
export class TrainingsUpdateManyWithoutCommentsNestedInput {
  @TypeGraphQL.Field(_type => [TrainingsCreateWithoutCommentsInput], {
    nullable: true
  })
  create?: TrainingsCreateWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsCreateOrConnectWithoutCommentsInput], {
    nullable: true
  })
  connectOrCreate?: TrainingsCreateOrConnectWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpsertWithWhereUniqueWithoutCommentsInput], {
    nullable: true
  })
  upsert?: TrainingsUpsertWithWhereUniqueWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateManyCommentsInputEnvelope, {
    nullable: true
  })
  createMany?: TrainingsCreateManyCommentsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TrainingsUpdateWithWhereUniqueWithoutCommentsInput], {
    nullable: true
  })
  update?: TrainingsUpdateWithWhereUniqueWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsUpdateManyWithWhereWithoutCommentsInput], {
    nullable: true
  })
  updateMany?: TrainingsUpdateManyWithWhereWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrainingsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrainingsScalarWhereInput[] | undefined;
}
