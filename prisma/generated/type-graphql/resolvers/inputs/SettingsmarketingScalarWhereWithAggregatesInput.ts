import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("SettingsmarketingScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SettingsmarketingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SettingsmarketingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SettingsmarketingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsmarketingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SettingsmarketingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsmarketingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SettingsmarketingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  mail_port?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  recaptcha_api?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  adsense_api?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  sitemap_url?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  customer_data_lifetime?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  mail_server?: StringNullableWithAggregatesFilter | undefined;
}
