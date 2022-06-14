import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyCustomersInputEnvelope } from "../inputs/MediamanagerCreateManyCustomersInputEnvelope";
import { MediamanagerCreateOrConnectWithoutCustomersInput } from "../inputs/MediamanagerCreateOrConnectWithoutCustomersInput";
import { MediamanagerCreateWithoutCustomersInput } from "../inputs/MediamanagerCreateWithoutCustomersInput";
import { MediamanagerScalarWhereInput } from "../inputs/MediamanagerScalarWhereInput";
import { MediamanagerUpdateManyWithWhereWithoutCustomersInput } from "../inputs/MediamanagerUpdateManyWithWhereWithoutCustomersInput";
import { MediamanagerUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/MediamanagerUpdateWithWhereUniqueWithoutCustomersInput";
import { MediamanagerUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/MediamanagerUpsertWithWhereUniqueWithoutCustomersInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateManyWithoutCustomersInput", {
  isAbstract: true
})
export class MediamanagerUpdateManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: MediamanagerUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyCustomersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MediamanagerUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: MediamanagerUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: MediamanagerUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MediamanagerScalarWhereInput[] | undefined;
}
