import { Customer_paymentOrderByWithAggregationInput } from "../../../inputs/Customer_paymentOrderByWithAggregationInput";
import { Customer_paymentScalarWhereWithAggregatesInput } from "../../../inputs/Customer_paymentScalarWhereWithAggregatesInput";
import { Customer_paymentWhereInput } from "../../../inputs/Customer_paymentWhereInput";
export declare class GroupByCustomer_paymentArgs {
    where?: Customer_paymentWhereInput | undefined;
    orderBy?: Customer_paymentOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "cust_id" | "payment_info" | "provider" | "account_no" | "expiry">;
    having?: Customer_paymentScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
