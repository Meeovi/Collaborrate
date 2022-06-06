import { CustomersOrderByWithRelationInput } from "../inputs/CustomersOrderByWithRelationInput";
export declare class EmailsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    recipients?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    customers?: CustomersOrderByWithRelationInput | undefined;
}
