import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class RolesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    role_name?: "asc" | "desc" | undefined;
    content?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
    type?: SortOrderInput | undefined;
    createRole?: SortOrderInput | undefined;
    updateRole?: SortOrderInput | undefined;
    deleteRole?: SortOrderInput | undefined;
    publishRole?: SortOrderInput | undefined;
    unpublishRole?: SortOrderInput | undefined;
    role?: SortOrderInput | undefined;
}
