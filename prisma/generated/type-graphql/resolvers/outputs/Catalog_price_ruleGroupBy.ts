import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Catalog_price_ruleAvgAggregate } from "../outputs/Catalog_price_ruleAvgAggregate";
import { Catalog_price_ruleCountAggregate } from "../outputs/Catalog_price_ruleCountAggregate";
import { Catalog_price_ruleMaxAggregate } from "../outputs/Catalog_price_ruleMaxAggregate";
import { Catalog_price_ruleMinAggregate } from "../outputs/Catalog_price_ruleMinAggregate";
import { Catalog_price_ruleSumAggregate } from "../outputs/Catalog_price_ruleSumAggregate";

@TypeGraphQL.ObjectType("Catalog_price_ruleGroupBy", {
  isAbstract: true
})
export class Catalog_price_ruleGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rule!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_groups!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  start_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  end_date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  actions_apply!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  actions_discount_amount!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  actions_discard_subsequent_rules!: boolean | null;

  @TypeGraphQL.Field(_type => Catalog_price_ruleCountAggregate, {
    nullable: true
  })
  _count!: Catalog_price_ruleCountAggregate | null;

  @TypeGraphQL.Field(_type => Catalog_price_ruleAvgAggregate, {
    nullable: true
  })
  _avg!: Catalog_price_ruleAvgAggregate | null;

  @TypeGraphQL.Field(_type => Catalog_price_ruleSumAggregate, {
    nullable: true
  })
  _sum!: Catalog_price_ruleSumAggregate | null;

  @TypeGraphQL.Field(_type => Catalog_price_ruleMinAggregate, {
    nullable: true
  })
  _min!: Catalog_price_ruleMinAggregate | null;

  @TypeGraphQL.Field(_type => Catalog_price_ruleMaxAggregate, {
    nullable: true
  })
  _max!: Catalog_price_ruleMaxAggregate | null;
}
