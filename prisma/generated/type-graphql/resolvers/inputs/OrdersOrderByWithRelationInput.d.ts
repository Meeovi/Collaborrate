import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class OrdersOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    purchase_point?: SortOrderInput | undefined;
    purchase_date?: SortOrderInput | undefined;
    bill_to_name?: "asc" | "desc" | undefined;
    ship_to_name?: SortOrderInput | undefined;
    grand_total_base?: SortOrderInput | undefined;
    grand_total_purchased?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
    action?: SortOrderInput | undefined;
    allocated_sources?: SortOrderInput | undefined;
    braintree_transaction_source?: SortOrderInput | undefined;
    cust_id?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    customers?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    quotes?: SortOrderInput | undefined;
    transactions?: SortOrderInput | undefined;
}
