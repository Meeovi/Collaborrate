import { PagesOrderByRelevanceInput } from "../inputs/PagesOrderByRelevanceInput";
export declare class PagesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    enable_page?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    content_title?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    url_key?: "asc" | "desc" | undefined;
    meta_title?: "asc" | "desc" | undefined;
    meta_keywords?: "asc" | "desc" | undefined;
    meta_description?: "asc" | "desc" | undefined;
    _relevance?: PagesOrderByRelevanceInput | undefined;
}
