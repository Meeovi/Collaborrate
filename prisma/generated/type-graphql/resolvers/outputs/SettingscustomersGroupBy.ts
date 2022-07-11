import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingscustomersAvgAggregate } from "../outputs/SettingscustomersAvgAggregate";
import { SettingscustomersCountAggregate } from "../outputs/SettingscustomersCountAggregate";
import { SettingscustomersMaxAggregate } from "../outputs/SettingscustomersMaxAggregate";
import { SettingscustomersMinAggregate } from "../outputs/SettingscustomersMinAggregate";
import { SettingscustomersSumAggregate } from "../outputs/SettingscustomersSumAggregate";

@TypeGraphQL.ObjectType("SettingscustomersGroupBy", {
  isAbstract: true
})
export class SettingscustomersGroupBy {
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
  login_as_customer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  share_customer_accounts!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  online_minutes_interval!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_data_lifetime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email_after_registration!: string | null;

  @TypeGraphQL.Field(_type => SettingscustomersCountAggregate, {
    nullable: true
  })
  _count!: SettingscustomersCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingscustomersAvgAggregate, {
    nullable: true
  })
  _avg!: SettingscustomersAvgAggregate | null;

  @TypeGraphQL.Field(_type => SettingscustomersSumAggregate, {
    nullable: true
  })
  _sum!: SettingscustomersSumAggregate | null;

  @TypeGraphQL.Field(_type => SettingscustomersMinAggregate, {
    nullable: true
  })
  _min!: SettingscustomersMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingscustomersMaxAggregate, {
    nullable: true
  })
  _max!: SettingscustomersMaxAggregate | null;
}
