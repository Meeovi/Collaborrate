import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
import { ProductsOrderByWithRelationInput } from "../inputs/ProductsOrderByWithRelationInput";
import { QuotesOrderByRelationAggregateInput } from "../inputs/QuotesOrderByRelationAggregateInput";
import { TransactionsOrderByRelationAggregateInput } from "../inputs/TransactionsOrderByRelationAggregateInput";
export declare class OrdersOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    purchase_point?: "asc" | "desc" | undefined;
    purchase_date?: "asc" | "desc" | undefined;
    bill_to_name?: "asc" | "desc" | undefined;
    ship_to_name?: "asc" | "desc" | undefined;
    grand_total_base?: "asc" | "desc" | undefined;
    grand_total_purchased?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    action?: "asc" | "desc" | undefined;
    allocated_sources?: "asc" | "desc" | undefined;
    braintree_transaction_source?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    customers?: CustomersOrderByWithRelationInput | undefined;
    products?: ProductsOrderByWithRelationInput | undefined;
    quotes?: QuotesOrderByRelationAggregateInput | undefined;
    transactions?: TransactionsOrderByRelationAggregateInput | undefined;
}
