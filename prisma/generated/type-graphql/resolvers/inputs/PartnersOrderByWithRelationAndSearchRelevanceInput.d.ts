import { PartnersOrderByRelevanceInput } from "../inputs/PartnersOrderByRelevanceInput";
export declare class PartnersOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    isPublic?: "asc" | "desc" | undefined;
    business_type?: "asc" | "desc" | undefined;
    _relevance?: PartnersOrderByRelevanceInput | undefined;
}
