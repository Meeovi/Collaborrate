import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
import { ProductsOrderByWithRelationInput } from "../inputs/ProductsOrderByWithRelationInput";
export declare class Credit_memosOrderByWithRelationInput {
    credit_memo?: "asc" | "desc" | undefined;
    order_number?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    bill_to_name?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    refunded?: "asc" | "desc" | undefined;
    action?: "asc" | "desc" | undefined;
    id?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    customers?: CustomersOrderByWithRelationInput | undefined;
    products?: ProductsOrderByWithRelationInput | undefined;
}
