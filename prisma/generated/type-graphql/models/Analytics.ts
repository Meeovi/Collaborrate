import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Analytics", {
  isAbstract: true
})
export class Analytics {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  share_data?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tracking_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  property_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_view?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  property_hit?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tracking_code?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  data_collection?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  data_retention?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  search_analytics?: string | null;
}
