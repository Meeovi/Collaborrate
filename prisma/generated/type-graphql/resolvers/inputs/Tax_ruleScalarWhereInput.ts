import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Tax_ruleScalarWhereInput", {
  isAbstract: true
})
export class Tax_ruleScalarWhereInput {
  @TypeGraphQL.Field(_type => [Tax_ruleScalarWhereInput], {
    nullable: true
  })
  AND?: Tax_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleScalarWhereInput], {
    nullable: true
  })
  OR?: Tax_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleScalarWhereInput], {
    nullable: true
  })
  NOT?: Tax_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tax_rate?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  prod_id?: BigIntFilter | undefined;
}
