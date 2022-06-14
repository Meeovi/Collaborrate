import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SettingsmarketingCreateManyInput", {
  isAbstract: true
})
export class SettingsmarketingCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mail_port?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  recaptcha_api?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adsense_api?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sitemap_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_data_lifetime?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mail_server?: string | undefined;
}
