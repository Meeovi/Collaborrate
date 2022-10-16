import { DigiboardOrderByRelevanceInput } from "../inputs/DigiboardOrderByRelevanceInput";
export declare class DigiboardOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    board?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    student?: "asc" | "desc" | undefined;
    course?: "asc" | "desc" | undefined;
    _relevance?: DigiboardOrderByRelevanceInput | undefined;
}
