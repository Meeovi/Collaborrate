import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SettingsmarketingWhereInput", {
  isAbstract: true
})
export class SettingsmarketingWhereInput {
  @TypeGraphQL.Field(_type => [SettingsmarketingWhereInput], {
    nullable: true
  })
  AND?: SettingsmarketingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsmarketingWhereInput], {
    nullable: true
  })
  OR?: SettingsmarketingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsmarketingWhereInput], {
    nullable: true
  })
  NOT?: SettingsmarketingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  mail_port?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  recaptcha_api?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  adsense_api?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  sitemap_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  customer_data_lifetime?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  mail_server?: StringNullableFilter | undefined;
}
