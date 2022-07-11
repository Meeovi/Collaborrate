import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsCreateWithoutMediamanagerInput } from "../inputs/AgreementsCreateWithoutMediamanagerInput";
import { AgreementsWhereUniqueInput } from "../inputs/AgreementsWhereUniqueInput";

@TypeGraphQL.InputType("AgreementsCreateOrConnectWithoutMediamanagerInput", {
  isAbstract: true
})
export class AgreementsCreateOrConnectWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => AgreementsWhereUniqueInput, {
    nullable: false
  })
  where!: AgreementsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AgreementsCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: AgreementsCreateWithoutMediamanagerInput;
}
