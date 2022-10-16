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
    _count?: RolesCountOrderByAggregateInput | undefined;
    _avg?: RolesAvgOrderByAggregateInput | undefined;
    _max?: RolesMaxOrderByAggregateInput | undefined;
    _min?: RolesMinOrderByAggregateInput | undefined;
    _sum?: RolesSumOrderByAggregateInput | undefined;
}
