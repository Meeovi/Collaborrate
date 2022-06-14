import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TargetsCreateInput", {
  isAbstract: true
})
export class TargetsCreateInput {
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
  Prefix?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  department?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postalcode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mobile?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  job_title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_postalcode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_state?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  office_phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email_opt_out?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  donotcall?: string | undefined;
}
