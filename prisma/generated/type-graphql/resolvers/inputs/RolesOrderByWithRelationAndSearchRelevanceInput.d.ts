import { RolesOrderByRelevanceInput } from "../inputs/RolesOrderByRelevanceInput";
export declare class RolesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    role_name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createRole?: "asc" | "desc" | undefined;
    updateRole?: "asc" | "desc" | undefined;
    deleteRole?: "asc" | "desc" | undefined;
    publishRole?: "asc" | "desc" | undefined;
    unpublishRole?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    _relevance?: RolesOrderByRelevanceInput | undefined;
}
