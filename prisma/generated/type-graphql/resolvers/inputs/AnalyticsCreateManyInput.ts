import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AnalyticsCreateManyInput", {
  isAbstract: true
})
export class AnalyticsCreateManyInput {
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
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  share_data?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tracking_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  property_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_view?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  property_hit?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tracking_code?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  data_collection?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  data_retention?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  search_analytics?: string | undefined;
}
