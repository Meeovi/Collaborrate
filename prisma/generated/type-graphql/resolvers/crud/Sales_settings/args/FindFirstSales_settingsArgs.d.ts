import { Sales_settingsOrderByWithRelationInput } from "../../../inputs/Sales_settingsOrderByWithRelationInput";
import { Sales_settingsWhereInput } from "../../../inputs/Sales_settingsWhereInput";
import { Sales_settingsWhereUniqueInput } from "../../../inputs/Sales_settingsWhereUniqueInput";
export declare class FindFirstSales_settingsArgs {
    where?: Sales_settingsWhereInput | undefined;
    orderBy?: Sales_settingsOrderByWithRelationInput[] | undefined;
    cursor?: Sales_settingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "sales_email" | "hide_customer_ip" | "checkout_subtotal" | "checkout_discount" | "checkout_shipping" | "checkout_tax" | "checkout_fixed_product_tax" | "checkout_grand_total" | "checkout_gift_cards" | "checkout_store_credit" | "allow_reorder" | "allow_zero_grandtotal" | "invoice_logo" | "invoice_html_print" | "invoice_address"> | undefined;
}
