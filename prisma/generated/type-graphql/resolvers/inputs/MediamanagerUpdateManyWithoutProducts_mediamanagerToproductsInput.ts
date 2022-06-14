import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope } from "../inputs/MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope";
import { MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerCreateWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerCreateWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerScalarWhereInput } from "../inputs/MediamanagerScalarWhereInput";
import { MediamanagerUpdateManyWithWhereWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerUpdateManyWithWhereWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerUpdateWithWhereUniqueWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerUpdateWithWhereUniqueWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerUpsertWithWhereUniqueWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerUpsertWithWhereUniqueWithoutProducts_mediamanagerToproductsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsInput", {
  isAbstract: true
})
export class MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutProducts_mediamanagerToproductsInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutProducts_mediamanagerToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutProducts_mediamanagerToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpsertWithWhereUniqueWithoutProducts_mediamanagerToproductsInput], {
    nullable: true
  })
  upsert?: MediamanagerUpsertWithWhereUniqueWithoutProducts_mediamanagerToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MediamanagerUpdateWithWhereUniqueWithoutProducts_mediamanagerToproductsInput], {
    nullable: true
  })
  update?: MediamanagerUpdateWithWhereUniqueWithoutProducts_mediamanagerToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpdateManyWithWhereWithoutProducts_mediamanagerToproductsInput], {
    nullable: true
  })
  updateMany?: MediamanagerUpdateManyWithWhereWithoutProducts_mediamanagerToproductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MediamanagerScalarWhereInput[] | undefined;
}
