import { InvoicesAvgOrderByAggregateInput } from "../inputs/InvoicesAvgOrderByAggregateInput";
import { InvoicesCountOrderByAggregateInput } from "../inputs/InvoicesCountOrderByAggregateInput";
import { InvoicesMaxOrderByAggregateInput } from "../inputs/InvoicesMaxOrderByAggregateInput";
import { InvoicesMinOrderByAggregateInput } from "../inputs/InvoicesMinOrderByAggregateInput";
import { InvoicesSumOrderByAggregateInput } from "../inputs/InvoicesSumOrderByAggregateInput";
export declare class InvoicesOrderByWithAggregationInput {
    invoice?: "asc" | "desc" | undefined;
    order_number?: "asc" | "desc" | undefined;
    invoice_date?: "asc" | "desc" | undefined;
    bill_to_name?: "asc" | "desc" | undefined;
    billing_address?: "asc" | "desc" | undefined;
    grand_total_base?: "asc" | "desc" | undefined;
    grand_total_purchased?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    shipping_address?: "asc" | "desc" | undefined;
    customer_name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    customer_group?: "asc" | "desc" | undefined;
    payment_method?: "asc" | "desc" | undefined;
    shipping_information?: "asc" | "desc" | undefined;
    subtotal?: "asc" | "desc" | undefined;
    shipping_and_handling?: "asc" | "desc" | undefined;
    id?: "asc" | "desc" | undefined;
    _count?: InvoicesCountOrderByAggregateInput | undefined;
    _avg?: InvoicesAvgOrderByAggregateInput | undefined;
    _max?: InvoicesMaxOrderByAggregateInput | undefined;
    _min?: InvoicesMinOrderByAggregateInput | undefined;
    _sum?: InvoicesSumOrderByAggregateInput | undefined;
}
