import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Settingsmarketing", {
  isAbstract: true
})
export class Settingsmarketing {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mail_port?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  recaptcha_api?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adsense_api?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sitemap_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_data_lifetime?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mail_server?: string | null;
}
