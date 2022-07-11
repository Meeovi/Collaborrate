import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("QuotesMinAggregate", {
  isAbstract: true
})
export class QuotesMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  valid_until!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quote_stage!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cust_id!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  prod_id!: bigint | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  approval_issues!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  approval_status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_postal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_street!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discount!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invoice_status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_discount!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_group_total!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_subtotal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_tax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_item_total!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_terms!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_postal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_street!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_tax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total!: string | null;
}
