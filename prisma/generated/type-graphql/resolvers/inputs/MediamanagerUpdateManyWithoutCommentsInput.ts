import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyCommentsInputEnvelope } from "../inputs/MediamanagerCreateManyCommentsInputEnvelope";
import { MediamanagerCreateOrConnectWithoutCommentsInput } from "../inputs/MediamanagerCreateOrConnectWithoutCommentsInput";
import { MediamanagerCreateWithoutCommentsInput } from "../inputs/MediamanagerCreateWithoutCommentsInput";
import { MediamanagerScalarWhereInput } from "../inputs/MediamanagerScalarWhereInput";
import { MediamanagerUpdateManyWithWhereWithoutCommentsInput } from "../inputs/MediamanagerUpdateManyWithWhereWithoutCommentsInput";
import { MediamanagerUpdateWithWhereUniqueWithoutCommentsInput } from "../inputs/MediamanagerUpdateWithWhereUniqueWithoutCommentsInput";
import { MediamanagerUpsertWithWhereUniqueWithoutCommentsInput } from "../inputs/MediamanagerUpsertWithWhereUniqueWithoutCommentsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateManyWithoutCommentsInput", {
  isAbstract: true
})
export class MediamanagerUpdateManyWithoutCommentsInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutCommentsInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutCommentsInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpsertWithWhereUniqueWithoutCommentsInput], {
    nullable: true
  })
  upsert?: MediamanagerUpsertWithWhereUniqueWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyCommentsInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyCommentsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MediamanagerUpdateWithWhereUniqueWithoutCommentsInput], {
    nullable: true
  })
  update?: MediamanagerUpdateWithWhereUniqueWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpdateManyWithWhereWithoutCommentsInput], {
    nullable: true
  })
  updateMany?: MediamanagerUpdateManyWithWhereWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MediamanagerScalarWhereInput[] | undefined;
}
