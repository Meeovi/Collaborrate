import { CurrenciesOrderByRelevanceInput } from "../inputs/CurrenciesOrderByRelevanceInput";
export declare class CurrenciesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    _relevance?: CurrenciesOrderByRelevanceInput | undefined;
}
