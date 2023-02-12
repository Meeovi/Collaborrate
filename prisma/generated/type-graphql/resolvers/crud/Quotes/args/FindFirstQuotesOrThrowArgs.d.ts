import { QuotesOrderByWithRelationInput } from "../../../inputs/QuotesOrderByWithRelationInput";
import { QuotesWhereInput } from "../../../inputs/QuotesWhereInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";
export declare class FindFirstQuotesOrThrowArgs {
    where?: QuotesWhereInput | undefined;
    orderBy?: QuotesOrderByWithRelationInput[] | undefined;
    cursor?: QuotesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "grand_total" | "created_at" | "categories" | "valid_until" | "quote_stage" | "customers" | "cust_id" | "prod_id" | "order_id" | "account" | "approval_issues" | "approval_status" | "assigned_to" | "billing_city" | "billing_country" | "billing_postal" | "billing_state" | "billing_street" | "contact" | "currency" | "discount" | "invoice_status" | "line_item_discount" | "line_item_group_total" | "line_item_name" | "line_item_subtotal" | "line_item_tax" | "line_item_total" | "payment_terms" | "shipping" | "shipping_city" | "shipping_country" | "shipping_postal" | "shipping_state" | "shipping_street" | "shipping_tax" | "subtotal" | "tax" | "total" | "customers_customersToquotes" | "orders" | "products_productsToquotes"> | undefined;
}
