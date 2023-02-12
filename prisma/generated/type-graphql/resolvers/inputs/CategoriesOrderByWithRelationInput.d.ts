import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CategoriesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    thumbnail?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    visibility?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
    websites?: SortOrderInput | undefined;
    product?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    meta_title?: SortOrderInput | undefined;
    meta_keywords?: SortOrderInput | undefined;
    meta_description?: SortOrderInput | undefined;
    meta_url?: SortOrderInput | undefined;
    workspaces?: SortOrderInput | undefined;
}
