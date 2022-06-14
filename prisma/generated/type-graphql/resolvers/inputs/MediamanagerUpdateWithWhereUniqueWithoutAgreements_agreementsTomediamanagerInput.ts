import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerUpdateWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerUpdateWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpdateWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerUpdateWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutAgreements_agreementsTomediamanagerInput, {
    nullable: false
  })
  data!: MediamanagerUpdateWithoutAgreements_agreementsTomediamanagerInput;
}
