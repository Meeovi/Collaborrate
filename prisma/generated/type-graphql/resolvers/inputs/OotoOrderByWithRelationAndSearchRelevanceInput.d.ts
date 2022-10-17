import { OotoOrderByRelevanceInput } from "../inputs/OotoOrderByRelevanceInput";
export declare class OotoOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    login?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    note?: "asc" | "desc" | undefined;
    using_time?: "asc" | "desc" | undefined;
    location?: "asc" | "desc" | undefined;
    _relevance?: OotoOrderByRelevanceInput | undefined;
}
