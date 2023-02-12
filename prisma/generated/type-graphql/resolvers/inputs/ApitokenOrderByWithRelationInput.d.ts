import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ApitokenOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    token_type?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    token?: "asc" | "desc" | undefined;
}
