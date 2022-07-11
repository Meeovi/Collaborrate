import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope } from "../inputs/MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope";
import { MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateNestedManyWithoutAgreements_agreementsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerCreateNestedManyWithoutAgreements_agreementsTomediamanagerInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  connect?: MediamanagerWhereUniqueInput[] | undefined;
}
