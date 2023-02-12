import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PermissionsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    create?: SortOrderInput | undefined;
    delete?: SortOrderInput | undefined;
    read?: SortOrderInput | undefined;
    role?: SortOrderInput | undefined;
    update?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
}
