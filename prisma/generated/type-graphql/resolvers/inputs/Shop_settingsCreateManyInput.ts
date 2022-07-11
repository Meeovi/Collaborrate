import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Shop_settingsCreateManyInput", {
  isAbstract: true
})
export class Shop_settingsCreateManyInput {
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
  store_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_hours?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipcode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address_two?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allow_state?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state_required_for?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allow_countries?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  optional_zip?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  european_union_countries?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  top_destinations?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  base_currency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_currency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allowed_currency?: string | undefined;
}
