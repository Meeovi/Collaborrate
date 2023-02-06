import { ThemesOrderByRelevanceInput } from "../inputs/ThemesOrderByRelevanceInput";
export declare class ThemesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    parent_theme?: "asc" | "desc" | undefined;
    theme_path?: "asc" | "desc" | undefined;
    action?: "asc" | "desc" | undefined;
    website_id?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
    _relevance?: ThemesOrderByRelevanceInput | undefined;
}
