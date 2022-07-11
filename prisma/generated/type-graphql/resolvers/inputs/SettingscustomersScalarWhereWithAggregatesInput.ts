import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("SettingscustomersScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SettingscustomersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SettingscustomersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SettingscustomersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingscustomersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SettingscustomersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingscustomersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SettingscustomersScalarWhereWithAggregatesInput[] | undefined;

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
  login_as_customer?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  share_customer_accounts?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  online_minutes_interval?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  customer_data_lifetime?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  email_after_registration?: StringNullableWithAggregatesFilter | undefined;
}
