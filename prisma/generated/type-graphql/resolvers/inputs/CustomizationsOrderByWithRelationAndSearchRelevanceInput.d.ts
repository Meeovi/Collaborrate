import { CustomizationsOrderByRelevanceInput } from "../inputs/CustomizationsOrderByRelevanceInput";
export declare class CustomizationsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    site_name?: "asc" | "desc" | undefined;
    nav_link?: "asc" | "desc" | undefined;
    notification?: "asc" | "desc" | undefined;
    banner?: "asc" | "desc" | undefined;
    footer_link?: "asc" | "desc" | undefined;
    announcement?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    site_url?: "asc" | "desc" | undefined;
    allow_signup?: "asc" | "desc" | undefined;
    _relevance?: CustomizationsOrderByRelevanceInput | undefined;
}
