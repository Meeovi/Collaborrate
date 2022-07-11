import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AccountsMaxAggregate", {
  isAbstract: true
})
export class AccountsMaxAggregate {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  office_phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

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
  assigned_to!: string | null;

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
  type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  industry!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  employees!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  annual_revenue!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  member_of!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaign!: string | null;
}
