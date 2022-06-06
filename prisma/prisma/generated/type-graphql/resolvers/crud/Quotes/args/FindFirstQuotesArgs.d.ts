import { QuotesOrderByWithRelationInput } from "../../../inputs/QuotesOrderByWithRelationInput";
import { QuotesWhereInput } from "../../../inputs/QuotesWhereInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";
export declare class FindFirstQuotesArgs {
    where?: QuotesWhereInput | undefined;
    orderBy?: QuotesOrderByWithRelationInput[] | undefined;
    cursor?: QuotesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "grand_total" | "created_at" | "categories" | "valid_until" | "quote_stage" | "customers" | "cust_id" | "prod_id" | "order_id" | "invoice_status" | "payment_terms" | "assigned_to" | "approval_status" | "approval_issues" | "account" | "contact" | "billing_street" | "billing_city" | "billing_state" | "billing_postal" | "billing_country" | "shipping_street" | "shipping_city" | "shipping_state" | "shipping_postal" | "shipping_country" | "currency" | "total" | "subtotal" | "discount" | "shipping" | "shipping_tax" | "tax" | "line_item_name" | "line_item_total" | "line_item_subtotal" | "line_item_discount" | "line_item_tax" | "line_item_group_total"> | undefined;
}
