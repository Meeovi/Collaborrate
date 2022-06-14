import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Shop_settingsAvgAggregate } from "../outputs/Shop_settingsAvgAggregate";
import { Shop_settingsCountAggregate } from "../outputs/Shop_settingsCountAggregate";
import { Shop_settingsMaxAggregate } from "../outputs/Shop_settingsMaxAggregate";
import { Shop_settingsMinAggregate } from "../outputs/Shop_settingsMinAggregate";
import { Shop_settingsSumAggregate } from "../outputs/Shop_settingsSumAggregate";

@TypeGraphQL.ObjectType("Shop_settingsGroupBy", {
  isAbstract: true
})
export class Shop_settingsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_hours!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipcode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address_two!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat_number!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allow_state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state_required_for!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allow_countries!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  optional_zip!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  european_union_countries!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  top_destinations!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  base_currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allowed_currency!: string | null;

  @TypeGraphQL.Field(_type => Shop_settingsCountAggregate, {
    nullable: true
  })
  _count!: Shop_settingsCountAggregate | null;

  @TypeGraphQL.Field(_type => Shop_settingsAvgAggregate, {
    nullable: true
  })
  _avg!: Shop_settingsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Shop_settingsSumAggregate, {
    nullable: true
  })
  _sum!: Shop_settingsSumAggregate | null;

  @TypeGraphQL.Field(_type => Shop_settingsMinAggregate, {
    nullable: true
  })
  _min!: Shop_settingsMinAggregate | null;

  @TypeGraphQL.Field(_type => Shop_settingsMaxAggregate, {
    nullable: true
  })
  _max!: Shop_settingsMaxAggregate | null;
}
