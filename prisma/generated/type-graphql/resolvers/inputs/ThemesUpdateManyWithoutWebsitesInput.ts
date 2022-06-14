import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesCreateManyWebsitesInputEnvelope } from "../inputs/ThemesCreateManyWebsitesInputEnvelope";
import { ThemesCreateOrConnectWithoutWebsitesInput } from "../inputs/ThemesCreateOrConnectWithoutWebsitesInput";
import { ThemesCreateWithoutWebsitesInput } from "../inputs/ThemesCreateWithoutWebsitesInput";
import { ThemesScalarWhereInput } from "../inputs/ThemesScalarWhereInput";
import { ThemesUpdateManyWithWhereWithoutWebsitesInput } from "../inputs/ThemesUpdateManyWithWhereWithoutWebsitesInput";
import { ThemesUpdateWithWhereUniqueWithoutWebsitesInput } from "../inputs/ThemesUpdateWithWhereUniqueWithoutWebsitesInput";
import { ThemesUpsertWithWhereUniqueWithoutWebsitesInput } from "../inputs/ThemesUpsertWithWhereUniqueWithoutWebsitesInput";
import { ThemesWhereUniqueInput } from "../inputs/ThemesWhereUniqueInput";

@TypeGraphQL.InputType("ThemesUpdateManyWithoutWebsitesInput", {
  isAbstract: true
})
export class ThemesUpdateManyWithoutWebsitesInput {
  @TypeGraphQL.Field(_type => [ThemesCreateWithoutWebsitesInput], {
    nullable: true
  })
  create?: ThemesCreateWithoutWebsitesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesCreateOrConnectWithoutWebsitesInput], {
    nullable: true
  })
  connectOrCreate?: ThemesCreateOrConnectWithoutWebsitesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesUpsertWithWhereUniqueWithoutWebsitesInput], {
    nullable: true
  })
  upsert?: ThemesUpsertWithWhereUniqueWithoutWebsitesInput[] | undefined;

  @TypeGraphQL.Field(_type => ThemesCreateManyWebsitesInputEnvelope, {
    nullable: true
  })
  createMany?: ThemesCreateManyWebsitesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThemesWhereUniqueInput], {
    nullable: true
  })
  set?: ThemesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ThemesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesWhereUniqueInput], {
    nullable: true
  })
  delete?: ThemesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesWhereUniqueInput], {
    nullable: true
  })
  connect?: ThemesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesUpdateWithWhereUniqueWithoutWebsitesInput], {
    nullable: true
  })
  update?: ThemesUpdateWithWhereUniqueWithoutWebsitesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesUpdateManyWithWhereWithoutWebsitesInput], {
    nullable: true
  })
  updateMany?: ThemesUpdateManyWithWhereWithoutWebsitesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ThemesScalarWhereInput[] | undefined;
}
