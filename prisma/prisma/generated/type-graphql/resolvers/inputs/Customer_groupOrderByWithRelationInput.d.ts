import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
export declare class Customer_groupOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tax_class?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    customers?: CustomersOrderByWithRelationInput | undefined;
}
