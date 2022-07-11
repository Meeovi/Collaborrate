import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesOrderByWithAggregationInput } from "../../../inputs/QuotesOrderByWithAggregationInput";
import { QuotesScalarWhereWithAggregatesInput } from "../../../inputs/QuotesScalarWhereWithAggregatesInput";
import { QuotesWhereInput } from "../../../inputs/QuotesWhereInput";
import { QuotesScalarFieldEnum } from "../../../../enums/QuotesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesWhereInput, {
    nullable: true
  })
  where?: QuotesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [QuotesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: QuotesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuotesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "grand_total" | "created_at" | "categories" | "valid_until" | "quote_stage" | "customers" | "cust_id" | "prod_id" | "order_id" | "account" | "approval_issues" | "approval_status" | "assigned_to" | "billing_city" | "billing_country" | "billing_postal" | "billing_state" | "billing_street" | "contact" | "currency" | "discount" | "invoice_status" | "line_item_discount" | "line_item_group_total" | "line_item_name" | "line_item_subtotal" | "line_item_tax" | "line_item_total" | "payment_terms" | "shipping" | "shipping_city" | "shipping_country" | "shipping_postal" | "shipping_state" | "shipping_street" | "shipping_tax" | "subtotal" | "tax" | "total">;

  @TypeGraphQL.Field(_type => QuotesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: QuotesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
