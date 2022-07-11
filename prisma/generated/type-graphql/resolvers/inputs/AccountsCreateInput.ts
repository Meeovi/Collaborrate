import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AccountsCreateInput", {
  isAbstract: true
})
export class AccountsCreateInput {
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
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  office_phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

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
  assigned_to?: string | undefined;

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
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  industry?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  employees?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  annual_revenue?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  member_of?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaign?: string | undefined;
}
