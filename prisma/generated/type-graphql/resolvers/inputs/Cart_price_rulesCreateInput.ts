import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Cart_price_rulesCreateInput", {
  isAbstract: true
})
export class Cart_price_rulesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rule?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupon?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uses_per_customer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  start_date?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  end_date?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  actions_apply?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  actions_discount_amount?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  actions_discard_subsequent_rules?: boolean | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  actions_max_qty_discount_is_applied_to?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  actions_discount_qty_step?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  actions_apply_shipping_amount?: boolean | undefined;
}
