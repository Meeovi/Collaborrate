import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class EmailsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    subject?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    cust_id?: "asc" | "desc" | undefined;
    bcc?: SortOrderInput | undefined;
    cc?: SortOrderInput | undefined;
    from?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    staff_id?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
}
