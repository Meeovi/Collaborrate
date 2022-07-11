import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { General_settingsAvgAggregate } from "../outputs/General_settingsAvgAggregate";
import { General_settingsCountAggregate } from "../outputs/General_settingsCountAggregate";
import { General_settingsMaxAggregate } from "../outputs/General_settingsMaxAggregate";
import { General_settingsMinAggregate } from "../outputs/General_settingsMinAggregate";
import { General_settingsSumAggregate } from "../outputs/General_settingsSumAggregate";

@TypeGraphQL.ObjectType("General_settingsGroupBy", {
  isAbstract: true
})
export class General_settingsGroupBy {
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
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tagline!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_restrictions!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restriction_mode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startup_page!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  landing_page!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  http_response!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_contact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_contact_two!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_support!: string | null;

  @TypeGraphQL.Field(_type => General_settingsCountAggregate, {
    nullable: true
  })
  _count!: General_settingsCountAggregate | null;

  @TypeGraphQL.Field(_type => General_settingsAvgAggregate, {
    nullable: true
  })
  _avg!: General_settingsAvgAggregate | null;

  @TypeGraphQL.Field(_type => General_settingsSumAggregate, {
    nullable: true
  })
  _sum!: General_settingsSumAggregate | null;

  @TypeGraphQL.Field(_type => General_settingsMinAggregate, {
    nullable: true
  })
  _min!: General_settingsMinAggregate | null;

  @TypeGraphQL.Field(_type => General_settingsMaxAggregate, {
    nullable: true
  })
  _max!: General_settingsMaxAggregate | null;
}
