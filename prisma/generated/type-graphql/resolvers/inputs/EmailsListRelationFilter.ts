import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsWhereInput } from "../inputs/EmailsWhereInput";

@TypeGraphQL.InputType("EmailsListRelationFilter", {
  isAbstract: true
})
export class EmailsListRelationFilter {
  @TypeGraphQL.Field(_type => EmailsWhereInput, {
    nullable: true
  })
  every?: EmailsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmailsWhereInput, {
    nullable: true
  })
  some?: EmailsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmailsWhereInput, {
    nullable: true
  })
  none?: EmailsWhereInput | undefined;
}
