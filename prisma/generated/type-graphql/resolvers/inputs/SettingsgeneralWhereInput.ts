import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SettingsgeneralWhereInput", {
  isAbstract: true
})
export class SettingsgeneralWhereInput {
  @TypeGraphQL.Field(_type => [SettingsgeneralWhereInput], {
    nullable: true
  })
  AND?: SettingsgeneralWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsgeneralWhereInput], {
    nullable: true
  })
  OR?: SettingsgeneralWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsgeneralWhereInput], {
    nullable: true
  })
  NOT?: SettingsgeneralWhereInput[] | undefined;

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
  site_title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  site_tagline?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  site_website?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  aws_s3?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  google_drive?: StringNullableFilter | undefined;
}
