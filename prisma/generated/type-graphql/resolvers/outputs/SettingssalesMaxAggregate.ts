import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SettingssalesMaxAggregate", {
  isAbstract: true
})
export class SettingssalesMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics_account_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics_account_number!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics_anonymizeip!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  analytics_content_experiments!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionlanguage!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionformat!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversioncolor!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionlabel!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_conversionvalue_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adwords_sendorder!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_manager_anonymizeip!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_manager_contentexperiments!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_manager_containerid!: string | null;
}
