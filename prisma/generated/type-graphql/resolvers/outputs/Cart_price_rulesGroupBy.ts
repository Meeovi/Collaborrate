import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cart_price_rulesAvgAggregate } from "../outputs/Cart_price_rulesAvgAggregate";
import { Cart_price_rulesCountAggregate } from "../outputs/Cart_price_rulesCountAggregate";
import { Cart_price_rulesMaxAggregate } from "../outputs/Cart_price_rulesMaxAggregate";
import { Cart_price_rulesMinAggregate } from "../outputs/Cart_price_rulesMinAggregate";
import { Cart_price_rulesSumAggregate } from "../outputs/Cart_price_rulesSumAggregate";

@TypeGraphQL.ObjectType("Cart_price_rulesGroupBy", {
  isAbstract: true
})
export class Cart_price_rulesGroupBy {
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
  coupon!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uses_per_customer!: string | null;

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

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  actions_max_qty_discount_is_applied_to!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  actions_discount_qty_step!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  actions_apply_shipping_amount!: boolean | null;

  @TypeGraphQL.Field(_type => Cart_price_rulesCountAggregate, {
    nullable: true
  })
  _count!: Cart_price_rulesCountAggregate | null;

  @TypeGraphQL.Field(_type => Cart_price_rulesAvgAggregate, {
    nullable: true
  })
  _avg!: Cart_price_rulesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Cart_price_rulesSumAggregate, {
    nullable: true
  })
  _sum!: Cart_price_rulesSumAggregate | null;

  @TypeGraphQL.Field(_type => Cart_price_rulesMinAggregate, {
    nullable: true
  })
  _min!: Cart_price_rulesMinAggregate | null;

  @TypeGraphQL.Field(_type => Cart_price_rulesMaxAggregate, {
    nullable: true
  })
  _max!: Cart_price_rulesMaxAggregate | null;
}
