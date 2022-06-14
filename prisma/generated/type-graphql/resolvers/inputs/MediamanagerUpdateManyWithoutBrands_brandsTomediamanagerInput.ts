import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope } from "../inputs/MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope";
import { MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput";
import { MediamanagerCreateWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerCreateWithoutBrands_brandsTomediamanagerInput";
import { MediamanagerScalarWhereInput } from "../inputs/MediamanagerScalarWhereInput";
import { MediamanagerUpdateManyWithWhereWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerUpdateManyWithWhereWithoutBrands_brandsTomediamanagerInput";
import { MediamanagerUpdateWithWhereUniqueWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerUpdateWithWhereUniqueWithoutBrands_brandsTomediamanagerInput";
import { MediamanagerUpsertWithWhereUniqueWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerUpsertWithWhereUniqueWithoutBrands_brandsTomediamanagerInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutBrands_brandsTomediamanagerInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutBrands_brandsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutBrands_brandsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpsertWithWhereUniqueWithoutBrands_brandsTomediamanagerInput], {
    nullable: true
  })
  upsert?: MediamanagerUpsertWithWhereUniqueWithoutBrands_brandsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MediamanagerUpdateWithWhereUniqueWithoutBrands_brandsTomediamanagerInput], {
    nullable: true
  })
  update?: MediamanagerUpdateWithWhereUniqueWithoutBrands_brandsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpdateManyWithWhereWithoutBrands_brandsTomediamanagerInput], {
    nullable: true
  })
  updateMany?: MediamanagerUpdateManyWithWhereWithoutBrands_brandsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MediamanagerScalarWhereInput[] | undefined;
}
