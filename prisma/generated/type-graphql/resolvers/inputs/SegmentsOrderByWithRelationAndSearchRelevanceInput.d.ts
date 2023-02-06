import { SegmentsOrderByRelevanceInput } from "../inputs/SegmentsOrderByRelevanceInput";
export declare class SegmentsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    apply_to?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    _relevance?: SegmentsOrderByRelevanceInput | undefined;
}
