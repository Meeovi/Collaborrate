import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TargetsAvgAggregate } from "../outputs/TargetsAvgAggregate";
import { TargetsCountAggregate } from "../outputs/TargetsCountAggregate";
import { TargetsMaxAggregate } from "../outputs/TargetsMaxAggregate";
import { TargetsMinAggregate } from "../outputs/TargetsMinAggregate";
import { TargetsSumAggregate } from "../outputs/TargetsSumAggregate";

@TypeGraphQL.ObjectType("TargetsGroupBy", {
  isAbstract: true
})
export class TargetsGroupBy {
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

  @TypeGraphQL.Field(_type => TargetsCountAggregate, {
    nullable: true
  })
  _count!: TargetsCountAggregate | null;

  @TypeGraphQL.Field(_type => TargetsAvgAggregate, {
    nullable: true
  })
  _avg!: TargetsAvgAggregate | null;

  @TypeGraphQL.Field(_type => TargetsSumAggregate, {
    nullable: true
  })
  _sum!: TargetsSumAggregate | null;

  @TypeGraphQL.Field(_type => TargetsMinAggregate, {
    nullable: true
  })
  _min!: TargetsMinAggregate | null;

  @TypeGraphQL.Field(_type => TargetsMaxAggregate, {
    nullable: true
  })
  _max!: TargetsMaxAggregate | null;
}
