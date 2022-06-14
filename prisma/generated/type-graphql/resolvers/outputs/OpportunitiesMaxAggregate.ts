import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("OpportunitiesMaxAggregate", {
  isAbstract: true
})
export class OpportunitiesMaxAggregate {
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
}
