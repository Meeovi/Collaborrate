import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_ruleWhereInput } from "../inputs/Tax_ruleWhereInput";

@TypeGraphQL.InputType("Tax_ruleListRelationFilter", {
  isAbstract: true
})
export class Tax_ruleListRelationFilter {
  @TypeGraphQL.Field(_type => Tax_ruleWhereInput, {
    nullable: true
  })
  every?: Tax_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleWhereInput, {
    nullable: true
  })
  some?: Tax_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleWhereInput, {
    nullable: true
  })
  none?: Tax_ruleWhereInput | undefined;
}
