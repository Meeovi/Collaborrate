import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Customer_groupScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Customer_groupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Customer_groupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Customer_groupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Customer_groupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_groupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Customer_groupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  tax_class?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  cust_id?: IntWithAggregatesFilter | undefined;
}
