import { Customer_paymentOrderByWithRelationInput } from "../inputs/Customer_paymentOrderByWithRelationInput";
import { OrdersOrderByWithRelationInput } from "../inputs/OrdersOrderByWithRelationInput";
export declare class TransactionsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    order_id?: "asc" | "desc" | undefined;
    transaction_id?: "asc" | "desc" | undefined;
    parent_transaction_id?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    payment_method?: "asc" | "desc" | undefined;
    closed?: "asc" | "desc" | undefined;
    orders?: OrdersOrderByWithRelationInput | undefined;
    customer_payment?: Customer_paymentOrderByWithRelationInput | undefined;
}
