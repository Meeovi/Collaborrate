import { Tax_ruleOrderByRelevanceInput } from "../inputs/Tax_ruleOrderByRelevanceInput";
export declare class Tax_ruleOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tax_rate?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _relevance?: Tax_ruleOrderByRelevanceInput | undefined;
}
