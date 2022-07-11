import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TargetsMinAggregate", {
  isAbstract: true
})
export class TargetsMinAggregate {
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
  Prefix!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  department!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postalcode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mobile!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  job_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_postalcode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt_country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  office_phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email_opt_out!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  donotcall!: string | null;
}
