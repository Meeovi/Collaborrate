import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerCreateOrConnectWithoutAgreements_agreementsTomediamanagerInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput;
}
