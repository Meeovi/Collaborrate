import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/QuotesOrderByWithRelationAndSearchRelevanceInput";
import { QuotesWhereInput } from "../../../inputs/QuotesWhereInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";
import { QuotesScalarFieldEnum } from "../../../../enums/QuotesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesWhereInput, {
    nullable: true
  })
  where?: QuotesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [QuotesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: QuotesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: true
  })
  cursor?: QuotesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [QuotesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "grand_total" | "created_at" | "categories" | "valid_until" | "quote_stage" | "customers" | "cust_id" | "prod_id" | "order_id" | "account" | "approval_issues" | "approval_status" | "assigned_to" | "billing_city" | "billing_country" | "billing_postal" | "billing_state" | "billing_street" | "contact" | "currency" | "discount" | "invoice_status" | "line_item_discount" | "line_item_group_total" | "line_item_name" | "line_item_subtotal" | "line_item_tax" | "line_item_total" | "payment_terms" | "shipping" | "shipping_city" | "shipping_country" | "shipping_postal" | "shipping_state" | "shipping_street" | "shipping_tax" | "subtotal" | "tax" | "total"> | undefined;
}
