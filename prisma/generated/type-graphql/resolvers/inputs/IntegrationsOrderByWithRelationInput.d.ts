import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class IntegrationsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    location?: SortOrderInput | undefined;
    category?: SortOrderInput | undefined;
}
