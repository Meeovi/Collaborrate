import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PagesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    enable_page?: SortOrderInput | undefined;
    title?: "asc" | "desc" | undefined;
    content_title?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    url_key?: SortOrderInput | undefined;
    meta_title?: SortOrderInput | undefined;
    meta_keywords?: SortOrderInput | undefined;
    meta_description?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
}
