import { UsersOrderByRelevanceInput } from "../inputs/UsersOrderByRelevanceInput";
export declare class UsersOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    phone?: "asc" | "desc" | undefined;
    permissions?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    mediamanager?: "asc" | "desc" | undefined;
    _relevance?: UsersOrderByRelevanceInput | undefined;
}
