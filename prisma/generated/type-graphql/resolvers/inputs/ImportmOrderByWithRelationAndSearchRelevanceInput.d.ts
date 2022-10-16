import { ImportmOrderByRelevanceInput } from "../inputs/ImportmOrderByRelevanceInput";
export declare class ImportmOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    file?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    _relevance?: ImportmOrderByRelevanceInput | undefined;
}
