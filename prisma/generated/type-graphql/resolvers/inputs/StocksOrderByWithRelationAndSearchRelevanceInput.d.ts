import { StocksOrderByRelevanceInput } from "../inputs/StocksOrderByRelevanceInput";
export declare class StocksOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    enabled?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    sources?: "asc" | "desc" | undefined;
    _relevance?: StocksOrderByRelevanceInput | undefined;
}
