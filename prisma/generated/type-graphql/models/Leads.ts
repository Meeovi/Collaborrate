import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Leads", {
  isAbstract: true
})
export class Leads {
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
  Prefix?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  department?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postalcode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fax?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mobile?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  job_title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_postalcode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_city?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_state?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  office_phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status_description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  opportunity_amount?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaign?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lead_source?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lead_source_description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  referred_by?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_name?: string | null;
}
