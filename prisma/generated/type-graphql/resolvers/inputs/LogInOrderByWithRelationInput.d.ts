import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class LogInOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    email?: SortOrderInput | undefined;
    password?: SortOrderInput | undefined;
    token?: SortOrderInput | undefined;
    expiresIn?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
    username?: SortOrderInput | undefined;
}
