import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class BrandsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    code?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    isPublic?: SortOrderInput | undefined;
    city?: SortOrderInput | undefined;
    product?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    mediamanager?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    workspaces?: SortOrderInput | undefined;
}
