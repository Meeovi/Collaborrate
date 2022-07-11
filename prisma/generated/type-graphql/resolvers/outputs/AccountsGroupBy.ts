import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountsAvgAggregate } from "../outputs/AccountsAvgAggregate";
import { AccountsCountAggregate } from "../outputs/AccountsCountAggregate";
import { AccountsMaxAggregate } from "../outputs/AccountsMaxAggregate";
import { AccountsMinAggregate } from "../outputs/AccountsMinAggregate";
import { AccountsSumAggregate } from "../outputs/AccountsSumAggregate";

@TypeGraphQL.ObjectType("AccountsGroupBy", {
  isAbstract: true
})
export class AccountsGroupBy {
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

  @TypeGraphQL.Field(_type => AccountsCountAggregate, {
    nullable: true
  })
  _count!: AccountsCountAggregate | null;

  @TypeGraphQL.Field(_type => AccountsAvgAggregate, {
    nullable: true
  })
  _avg!: AccountsAvgAggregate | null;

  @TypeGraphQL.Field(_type => AccountsSumAggregate, {
    nullable: true
  })
  _sum!: AccountsSumAggregate | null;

  @TypeGraphQL.Field(_type => AccountsMinAggregate, {
    nullable: true
  })
  _min!: AccountsMinAggregate | null;

  @TypeGraphQL.Field(_type => AccountsMaxAggregate, {
    nullable: true
  })
  _max!: AccountsMaxAggregate | null;
}
