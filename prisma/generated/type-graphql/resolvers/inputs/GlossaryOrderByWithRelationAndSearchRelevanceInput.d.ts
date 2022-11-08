import { GlossaryOrderByRelevanceInput } from "../inputs/GlossaryOrderByRelevanceInput";
export declare class GlossaryOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    _relevance?: GlossaryOrderByRelevanceInput | undefined;
}
