import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OpportunitiesAvgAggregate } from "../outputs/OpportunitiesAvgAggregate";
import { OpportunitiesCountAggregate } from "../outputs/OpportunitiesCountAggregate";
import { OpportunitiesMaxAggregate } from "../outputs/OpportunitiesMaxAggregate";
import { OpportunitiesMinAggregate } from "../outputs/OpportunitiesMinAggregate";
import { OpportunitiesSumAggregate } from "../outputs/OpportunitiesSumAggregate";

@TypeGraphQL.ObjectType("OpportunitiesGroupBy", {
  isAbstract: true
})
export class OpportunitiesGroupBy {
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
  amount!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sales_stage!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  probability!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  next_step!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lead_source!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaign!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expected_close_date!: string | null;

  @TypeGraphQL.Field(_type => OpportunitiesCountAggregate, {
    nullable: true
  })
  _count!: OpportunitiesCountAggregate | null;

  @TypeGraphQL.Field(_type => OpportunitiesAvgAggregate, {
    nullable: true
  })
  _avg!: OpportunitiesAvgAggregate | null;

  @TypeGraphQL.Field(_type => OpportunitiesSumAggregate, {
    nullable: true
  })
  _sum!: OpportunitiesSumAggregate | null;

  @TypeGraphQL.Field(_type => OpportunitiesMinAggregate, {
    nullable: true
  })
  _min!: OpportunitiesMinAggregate | null;

  @TypeGraphQL.Field(_type => OpportunitiesMaxAggregate, {
    nullable: true
  })
  _max!: OpportunitiesMaxAggregate | null;
}
