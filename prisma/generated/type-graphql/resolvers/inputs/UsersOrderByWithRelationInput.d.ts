import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class UsersOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: SortOrderInput | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    phone?: SortOrderInput | undefined;
    permissions?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
    mediamanager?: SortOrderInput | undefined;
}
