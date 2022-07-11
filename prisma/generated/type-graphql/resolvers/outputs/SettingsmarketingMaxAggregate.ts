import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SettingsmarketingMaxAggregate", {
  isAbstract: true
})
export class SettingsmarketingMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mail_port!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  recaptcha_api!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  adsense_api!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sitemap_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_data_lifetime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mail_server!: string | null;
}
