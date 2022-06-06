import { Sales_settingsOrderByWithAggregationInput } from "../../../inputs/Sales_settingsOrderByWithAggregationInput";
import { Sales_settingsScalarWhereWithAggregatesInput } from "../../../inputs/Sales_settingsScalarWhereWithAggregatesInput";
import { Sales_settingsWhereInput } from "../../../inputs/Sales_settingsWhereInput";
export declare class GroupBySales_settingsArgs {
    where?: Sales_settingsWhereInput | undefined;
    orderBy?: Sales_settingsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "sales_email" | "hide_customer_ip" | "checkout_subtotal" | "checkout_discount" | "checkout_shipping" | "checkout_tax" | "checkout_fixed_product_tax" | "checkout_grand_total" | "checkout_gift_cards" | "checkout_store_credit" | "allow_reorder" | "allow_zero_grandtotal" | "invoice_logo" | "invoice_html_print" | "invoice_address">;
    having?: Sales_settingsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
