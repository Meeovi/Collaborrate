import { StatesOrderByRelevanceInput } from "../inputs/StatesOrderByRelevanceInput";
export declare class StatesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    trainings?: "asc" | "desc" | undefined;
    _relevance?: StatesOrderByRelevanceInput | undefined;
}
