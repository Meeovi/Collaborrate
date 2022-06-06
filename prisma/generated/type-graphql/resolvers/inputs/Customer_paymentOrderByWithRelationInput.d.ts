import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
import { TransactionsOrderByRelationAggregateInput } from "../inputs/TransactionsOrderByRelationAggregateInput";
export declare class Customer_paymentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    payment_info?: "asc" | "desc" | undefined;
    provider?: "asc" | "desc" | undefined;
    account_no?: "asc" | "desc" | undefined;
    expiry?: "asc" | "desc" | undefined;
    customers?: CustomersOrderByWithRelationInput | undefined;
    transactions?: TransactionsOrderByRelationAggregateInput | undefined;
}
