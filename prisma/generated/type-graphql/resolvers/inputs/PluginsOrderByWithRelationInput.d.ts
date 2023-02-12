import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PluginsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    url?: SortOrderInput | undefined;
    github_link?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    logo?: SortOrderInput | undefined;
    screenshots?: SortOrderInput | undefined;
    last_updated?: SortOrderInput | undefined;
    publisher_name?: SortOrderInput | undefined;
    agree_terms?: SortOrderInput | undefined;
    publisher_email?: SortOrderInput | undefined;
}
