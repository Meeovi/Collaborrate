import { InvoicesOrderByWithAggregationInput } from "../../../inputs/InvoicesOrderByWithAggregationInput";
import { InvoicesScalarWhereWithAggregatesInput } from "../../../inputs/InvoicesScalarWhereWithAggregatesInput";
import { InvoicesWhereInput } from "../../../inputs/InvoicesWhereInput";
export declare class GroupByInvoicesArgs {
    where?: InvoicesWhereInput | undefined;
    orderBy?: InvoicesOrderByWithAggregationInput[] | undefined;
    by: Array<"invoice" | "order_number" | "invoice_date" | "bill_to_name" | "billing_address" | "grand_total_base" | "grand_total_purchased" | "status" | "shipping_address" | "customer_name" | "email" | "customer_group" | "payment_method" | "shipping_information" | "subtotal" | "shipping_and_handling" | "id">;
    having?: InvoicesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
