import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ManufacturerOrderByWithRelationInput {
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
    products?: SortOrderInput | undefined;
}
