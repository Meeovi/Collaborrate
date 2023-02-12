import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class WarehouseOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    city?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    postal?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    category?: SortOrderInput | undefined;
    isPublic?: SortOrderInput | undefined;
}
