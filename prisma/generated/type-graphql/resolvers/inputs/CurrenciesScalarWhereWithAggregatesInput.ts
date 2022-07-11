import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("CurrenciesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CurrenciesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CurrenciesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CurrenciesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrenciesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CurrenciesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrenciesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CurrenciesScalarWhereWithAggregatesInput[] | undefined;

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
  code?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  region?: StringNullableWithAggregatesFilter | undefined;
}
