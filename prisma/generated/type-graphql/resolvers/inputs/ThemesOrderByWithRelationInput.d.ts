import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ThemesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: SortOrderInput | undefined;
    parent_theme?: SortOrderInput | undefined;
    theme_path?: SortOrderInput | undefined;
    action?: SortOrderInput | undefined;
    website_id?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
}
