import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("SettingsgeneralScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SettingsgeneralScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SettingsgeneralScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SettingsgeneralScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsgeneralScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SettingsgeneralScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsgeneralScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SettingsgeneralScalarWhereWithAggregatesInput[] | undefined;

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
  site_title?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  site_tagline?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  site_website?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  email?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  aws_s3?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  google_drive?: StringNullableWithAggregatesFilter | undefined;
}
