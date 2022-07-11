import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("DeepdiveScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class DeepdiveScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DeepdiveScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DeepdiveScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeepdiveScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DeepdiveScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeepdiveScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DeepdiveScalarWhereWithAggregatesInput[] | undefined;

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
  end_date?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  content?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  attendees?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  login?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  start_date?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  whid?: StringNullableWithAggregatesFilter | undefined;
}
