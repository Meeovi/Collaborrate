import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_rateWhereInput } from "../inputs/Tax_rateWhereInput";

@TypeGraphQL.InputType("Tax_rateListRelationFilter", {
  isAbstract: true
})
export class Tax_rateListRelationFilter {
  @TypeGraphQL.Field(_type => Tax_rateWhereInput, {
    nullable: true
  })
  every?: Tax_rateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateWhereInput, {
    nullable: true
  })
  some?: Tax_rateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateWhereInput, {
    nullable: true
  })
  none?: Tax_rateWhereInput | undefined;
}
