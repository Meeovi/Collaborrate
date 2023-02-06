import { IntegrationsOrderByRelevanceInput } from "../inputs/IntegrationsOrderByRelevanceInput";
export declare class IntegrationsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    location?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    _relevance?: IntegrationsOrderByRelevanceInput | undefined;
}
