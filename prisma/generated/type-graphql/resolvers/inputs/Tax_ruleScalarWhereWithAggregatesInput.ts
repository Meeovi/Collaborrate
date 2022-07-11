import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Tax_ruleScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Tax_ruleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Tax_ruleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Tax_ruleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Tax_ruleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Tax_ruleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  tax_rate?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  prod_id?: BigIntWithAggregatesFilter | undefined;
}
