import { LogInOrderByRelevanceInput } from "../inputs/LogInOrderByRelevanceInput";
export declare class LogInOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    expiresIn?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    _relevance?: LogInOrderByRelevanceInput | undefined;
}
