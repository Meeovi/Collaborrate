import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CurrenciesWhereInput", {
  isAbstract: true
})
export class CurrenciesWhereInput {
  @TypeGraphQL.Field(_type => [CurrenciesWhereInput], {
    nullable: true
  })
  AND?: CurrenciesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrenciesWhereInput], {
    nullable: true
  })
  OR?: CurrenciesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrenciesWhereInput], {
    nullable: true
  })
  NOT?: CurrenciesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  region?: StringNullableFilter | undefined;
}
