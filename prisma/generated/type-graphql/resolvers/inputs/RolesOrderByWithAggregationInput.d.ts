import { RolesAvgOrderByAggregateInput } from "../inputs/RolesAvgOrderByAggregateInput";
import { RolesCountOrderByAggregateInput } from "../inputs/RolesCountOrderByAggregateInput";
import { RolesMaxOrderByAggregateInput } from "../inputs/RolesMaxOrderByAggregateInput";
import { RolesMinOrderByAggregateInput } from "../inputs/RolesMinOrderByAggregateInput";
import { RolesSumOrderByAggregateInput } from "../inputs/RolesSumOrderByAggregateInput";
export declare class RolesOrderByWithAggregationInput {
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
    _count?: RolesCountOrderByAggregateInput | undefined;
    _avg?: RolesAvgOrderByAggregateInput | undefined;
    _max?: RolesMaxOrderByAggregateInput | undefined;
    _min?: RolesMinOrderByAggregateInput | undefined;
    _sum?: RolesSumOrderByAggregateInput | undefined;
}
