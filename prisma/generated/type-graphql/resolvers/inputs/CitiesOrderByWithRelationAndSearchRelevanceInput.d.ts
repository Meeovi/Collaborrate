import { CitiesOrderByRelevanceInput } from "../inputs/CitiesOrderByRelevanceInput";
export declare class CitiesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    postalCode?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    _relevance?: CitiesOrderByRelevanceInput | undefined;
}
