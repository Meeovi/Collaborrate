import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SettingssalesCreateInput", {
  isAbstract: true
})
export class SettingssalesCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics_account_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics_account_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics_anonymizeip?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics_content_experiments?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionid?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionlanguage?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionformat?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversioncolor?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionlabel?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionvalue_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_sendorder?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_manager_anonymizeip?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_manager_contentexperiments?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_manager_containerid?: string | undefined;
}
