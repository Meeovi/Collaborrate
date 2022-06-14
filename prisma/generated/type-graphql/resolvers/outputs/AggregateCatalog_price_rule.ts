import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Catalog_price_ruleAvgAggregate } from "../outputs/Catalog_price_ruleAvgAggregate";
import { Catalog_price_ruleCountAggregate } from "../outputs/Catalog_price_ruleCountAggregate";
import { Catalog_price_ruleMaxAggregate } from "../outputs/Catalog_price_ruleMaxAggregate";
import { Catalog_price_ruleMinAggregate } from "../outputs/Catalog_price_ruleMinAggregate";
import { Catalog_price_ruleSumAggregate } from "../outputs/Catalog_price_ruleSumAggregate";

@TypeGraphQL.ObjectType("AggregateCatalog_price_rule", {
  isAbstract: true
})
export class AggregateCatalog_price_rule {
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
