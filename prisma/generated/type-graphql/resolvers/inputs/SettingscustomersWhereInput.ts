import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SettingscustomersWhereInput", {
  isAbstract: true
})
export class SettingscustomersWhereInput {
  @TypeGraphQL.Field(_type => [SettingscustomersWhereInput], {
    nullable: true
  })
  AND?: SettingscustomersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingscustomersWhereInput], {
    nullable: true
  })
  OR?: SettingscustomersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingscustomersWhereInput], {
    nullable: true
  })
  NOT?: SettingscustomersWhereInput[] | undefined;

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
  login_as_customer?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  share_customer_accounts?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  online_minutes_interval?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  customer_data_lifetime?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email_after_registration?: StringNullableFilter | undefined;
}
