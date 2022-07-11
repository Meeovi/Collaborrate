import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope } from "../inputs/MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope";
import { MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerScalarWhereInput } from "../inputs/MediamanagerScalarWhereInput";
import { MediamanagerUpdateManyWithWhereWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerUpdateManyWithWhereWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerUpdateWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerUpdateWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerUpsertWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerUpsertWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateManyWithoutAgreements_agreementsTomediamanagerNestedInput", {
  isAbstract: true
})
export class MediamanagerUpdateManyWithoutAgreements_agreementsTomediamanagerNestedInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpsertWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput], {
    nullable: true
  })
  upsert?: MediamanagerUpsertWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MediamanagerUpdateWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput], {
    nullable: true
  })
  update?: MediamanagerUpdateWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerUpdateManyWithWhereWithoutAgreements_agreementsTomediamanagerInput], {
    nullable: true
  })
  updateMany?: MediamanagerUpdateManyWithWhereWithoutAgreements_agreementsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MediamanagerScalarWhereInput[] | undefined;
}
