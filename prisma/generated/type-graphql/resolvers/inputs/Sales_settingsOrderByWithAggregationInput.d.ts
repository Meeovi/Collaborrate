import { Sales_settingsAvgOrderByAggregateInput } from "../inputs/Sales_settingsAvgOrderByAggregateInput";
import { Sales_settingsCountOrderByAggregateInput } from "../inputs/Sales_settingsCountOrderByAggregateInput";
import { Sales_settingsMaxOrderByAggregateInput } from "../inputs/Sales_settingsMaxOrderByAggregateInput";
import { Sales_settingsMinOrderByAggregateInput } from "../inputs/Sales_settingsMinOrderByAggregateInput";
import { Sales_settingsSumOrderByAggregateInput } from "../inputs/Sales_settingsSumOrderByAggregateInput";
export declare class Sales_settingsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    sales_email?: "asc" | "desc" | undefined;
    hide_customer_ip?: "asc" | "desc" | undefined;
    checkout_subtotal?: "asc" | "desc" | undefined;
    checkout_discount?: "asc" | "desc" | undefined;
    checkout_shipping?: "asc" | "desc" | undefined;
    checkout_tax?: "asc" | "desc" | undefined;
    checkout_fixed_product_tax?: "asc" | "desc" | undefined;
    checkout_grand_total?: "asc" | "desc" | undefined;
    checkout_gift_cards?: "asc" | "desc" | undefined;
    checkout_store_credit?: "asc" | "desc" | undefined;
    allow_reorder?: "asc" | "desc" | undefined;
    allow_zero_grandtotal?: "asc" | "desc" | undefined;
    invoice_logo?: "asc" | "desc" | undefined;
    invoice_html_print?: "asc" | "desc" | undefined;
    invoice_address?: "asc" | "desc" | undefined;
    _count?: Sales_settingsCountOrderByAggregateInput | undefined;
    _avg?: Sales_settingsAvgOrderByAggregateInput | undefined;
    _max?: Sales_settingsMaxOrderByAggregateInput | undefined;
    _min?: Sales_settingsMinOrderByAggregateInput | undefined;
    _sum?: Sales_settingsSumOrderByAggregateInput | undefined;
}
