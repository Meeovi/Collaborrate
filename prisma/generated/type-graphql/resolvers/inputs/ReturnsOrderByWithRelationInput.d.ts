import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
import { ProductsOrderByWithRelationInput } from "../inputs/ProductsOrderByWithRelationInput";
export declare class ReturnsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    validity?: "asc" | "desc" | undefined;
    return_prefix?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    customers?: CustomersOrderByWithRelationInput | undefined;
    products?: ProductsOrderByWithRelationInput | undefined;
}
