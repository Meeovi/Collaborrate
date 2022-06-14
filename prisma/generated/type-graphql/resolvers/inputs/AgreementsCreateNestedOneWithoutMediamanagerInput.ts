import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsCreateOrConnectWithoutMediamanagerInput } from "../inputs/AgreementsCreateOrConnectWithoutMediamanagerInput";
import { AgreementsCreateWithoutMediamanagerInput } from "../inputs/AgreementsCreateWithoutMediamanagerInput";
import { AgreementsWhereUniqueInput } from "../inputs/AgreementsWhereUniqueInput";

@TypeGraphQL.InputType("AgreementsCreateNestedOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class AgreementsCreateNestedOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => AgreementsCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: AgreementsCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: AgreementsCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsWhereUniqueInput, {
    nullable: true
  })
  connect?: AgreementsWhereUniqueInput | undefined;
}
