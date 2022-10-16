import { RolesOrderByRelevanceInput } from "../inputs/RolesOrderByRelevanceInput";
export declare class RolesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    role_name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    _relevance?: RolesOrderByRelevanceInput | undefined;
}
