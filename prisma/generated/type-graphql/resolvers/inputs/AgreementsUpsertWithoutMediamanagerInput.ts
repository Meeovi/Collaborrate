import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsCreateWithoutMediamanagerInput } from "../inputs/AgreementsCreateWithoutMediamanagerInput";
import { AgreementsUpdateWithoutMediamanagerInput } from "../inputs/AgreementsUpdateWithoutMediamanagerInput";

@TypeGraphQL.InputType("AgreementsUpsertWithoutMediamanagerInput", {
  isAbstract: true
})
export class AgreementsUpsertWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => AgreementsUpdateWithoutMediamanagerInput, {
    nullable: false
  })
  update!: AgreementsUpdateWithoutMediamanagerInput;

  @TypeGraphQL.Field(_type => AgreementsCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: AgreementsCreateWithoutMediamanagerInput;
}
