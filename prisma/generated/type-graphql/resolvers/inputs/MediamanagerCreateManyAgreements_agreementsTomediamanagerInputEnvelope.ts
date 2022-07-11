import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerCreateManyAgreements_agreementsTomediamanagerInput";

@TypeGraphQL.InputType("MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope", {
  isAbstract: true
})
export class MediamanagerCreateManyAgreements_agreementsTomediamanagerInputEnvelope {
  @TypeGraphQL.Field(_type => [MediamanagerCreateManyAgreements_agreementsTomediamanagerInput], {
    nullable: false
  })
  data!: MediamanagerCreateManyAgreements_agreementsTomediamanagerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
