import { ReviewsOrderByRelevanceInput } from "../inputs/ReviewsOrderByRelevanceInput";
export declare class ReviewsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    _relevance?: ReviewsOrderByRelevanceInput | undefined;
}
