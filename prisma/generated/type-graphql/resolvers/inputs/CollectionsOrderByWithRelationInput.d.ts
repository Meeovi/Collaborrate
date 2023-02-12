import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CollectionsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    product?: SortOrderInput | undefined;
    meta_title?: SortOrderInput | undefined;
    meta_keywords?: SortOrderInput | undefined;
    meta_description?: SortOrderInput | undefined;
}
