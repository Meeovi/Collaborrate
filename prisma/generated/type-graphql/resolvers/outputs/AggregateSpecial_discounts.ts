import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Special_discountsAvgAggregate } from "../outputs/Special_discountsAvgAggregate";
import { Special_discountsCountAggregate } from "../outputs/Special_discountsCountAggregate";
import { Special_discountsMaxAggregate } from "../outputs/Special_discountsMaxAggregate";
import { Special_discountsMinAggregate } from "../outputs/Special_discountsMinAggregate";
import { Special_discountsSumAggregate } from "../outputs/Special_discountsSumAggregate";

@TypeGraphQL.ObjectType("AggregateSpecial_discounts", {
  isAbstract: true
})
export class AggregateSpecial_discounts {
  @TypeGraphQL.Field(_type => Special_discountsCountAggregate, {
    nullable: true
  })
  _count!: Special_discountsCountAggregate | null;

  @TypeGraphQL.Field(_type => Special_discountsAvgAggregate, {
    nullable: true
  })
  _avg!: Special_discountsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Special_discountsSumAggregate, {
    nullable: true
  })
  _sum!: Special_discountsSumAggregate | null;

  @TypeGraphQL.Field(_type => Special_discountsMinAggregate, {
    nullable: true
  })
  _min!: Special_discountsMinAggregate | null;

  @TypeGraphQL.Field(_type => Special_discountsMaxAggregate, {
    nullable: true
  })
  _max!: Special_discountsMaxAggregate | null;
}
