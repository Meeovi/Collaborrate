import { CountriesOrderByRelevanceInput } from "../inputs/CountriesOrderByRelevanceInput";
export declare class CountriesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    trainings?: "asc" | "desc" | undefined;
    _relevance?: CountriesOrderByRelevanceInput | undefined;
}
