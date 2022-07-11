import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsWhereInput } from "../inputs/AgreementsWhereInput";

@TypeGraphQL.InputType("AgreementsRelationFilter", {
  isAbstract: true
})
export class AgreementsRelationFilter {
  @TypeGraphQL.Field(_type => AgreementsWhereInput, {
    nullable: true
  })
  is?: AgreementsWhereInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsWhereInput, {
    nullable: true
  })
  isNot?: AgreementsWhereInput | undefined;
}
