import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_ruleAvgAggregate } from "../outputs/Tax_ruleAvgAggregate";
import { Tax_ruleCountAggregate } from "../outputs/Tax_ruleCountAggregate";
import { Tax_ruleMaxAggregate } from "../outputs/Tax_ruleMaxAggregate";
import { Tax_ruleMinAggregate } from "../outputs/Tax_ruleMinAggregate";
import { Tax_ruleSumAggregate } from "../outputs/Tax_ruleSumAggregate";

@TypeGraphQL.ObjectType("Tax_ruleGroupBy", {
  isAbstract: true
})
export class Tax_ruleGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_rate!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  @TypeGraphQL.Field(_type => Tax_ruleCountAggregate, {
    nullable: true
  })
  _count!: Tax_ruleCountAggregate | null;

  @TypeGraphQL.Field(_type => Tax_ruleAvgAggregate, {
    nullable: true
  })
  _avg!: Tax_ruleAvgAggregate | null;

  @TypeGraphQL.Field(_type => Tax_ruleSumAggregate, {
    nullable: true
  })
  _sum!: Tax_ruleSumAggregate | null;

  @TypeGraphQL.Field(_type => Tax_ruleMinAggregate, {
    nullable: true
  })
  _min!: Tax_ruleMinAggregate | null;

  @TypeGraphQL.Field(_type => Tax_ruleMaxAggregate, {
    nullable: true
  })
  _max!: Tax_ruleMaxAggregate | null;
}
