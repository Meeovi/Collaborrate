import { InternalizationOrderByRelevanceInput } from "../inputs/InternalizationOrderByRelevanceInput";
export declare class InternalizationOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    default?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    _relevance?: InternalizationOrderByRelevanceInput | undefined;
}
