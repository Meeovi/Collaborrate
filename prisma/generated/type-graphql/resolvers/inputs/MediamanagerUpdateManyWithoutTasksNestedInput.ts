import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyTasksInputEnvelope } from "../inputs/MediamanagerCreateManyTasksInputEnvelope";
import { MediamanagerCreateOrConnectWithoutTasksInput } from "../inputs/MediamanagerCreateOrConnectWithoutTasksInput";
import { MediamanagerCreateWithoutTasksInput } from "../inputs/MediamanagerCreateWithoutTasksInput";
import { MediamanagerScalarWhereInput } from "../inputs/MediamanagerScalarWhereInput";
import { MediamanagerUpdateManyWithWhereWithoutTasksInput } from "../inputs/MediamanagerUpdateManyWithWhereWithoutTasksInput";
import { MediamanagerUpdateWithWhereUniqueWithoutTasksInput } from "../inputs/MediamanagerUpdateWithWhereUniqueWithoutTasksInput";
import { MediamanagerUpsertWithWhereUniqueWithoutTasksInput } from "../inputs/MediamanagerUpsertWithWhereUniqueWithoutTasksInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateManyWithoutTasksNestedInput", {
  isAbstract: true
})
export class MediamanagerUpdateManyWithoutTasksNestedInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutTasksInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpsertWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  upsert?: MediamanagerUpsertWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyTasksInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  set?: MediamanagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MediamanagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  delete?: MediamanagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  connect?: MediamanagerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpdateWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  update?: MediamanagerUpdateWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpdateManyWithWhereWithoutTasksInput], {
    nullable: true
  })
  updateMany?: MediamanagerUpdateManyWithWhereWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MediamanagerScalarWhereInput[] | undefined;
}
