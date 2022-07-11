import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyUsersInputEnvelope } from "../inputs/MediamanagerCreateManyUsersInputEnvelope";
import { MediamanagerCreateOrConnectWithoutUsersInput } from "../inputs/MediamanagerCreateOrConnectWithoutUsersInput";
import { MediamanagerCreateWithoutUsersInput } from "../inputs/MediamanagerCreateWithoutUsersInput";
import { MediamanagerScalarWhereInput } from "../inputs/MediamanagerScalarWhereInput";
import { MediamanagerUpdateManyWithWhereWithoutUsersInput } from "../inputs/MediamanagerUpdateManyWithWhereWithoutUsersInput";
import { MediamanagerUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/MediamanagerUpdateWithWhereUniqueWithoutUsersInput";
import { MediamanagerUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/MediamanagerUpsertWithWhereUniqueWithoutUsersInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class MediamanagerUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutUsersInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: MediamanagerUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyUsersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MediamanagerUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: MediamanagerUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: MediamanagerUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MediamanagerScalarWhereInput[] | undefined;
}
