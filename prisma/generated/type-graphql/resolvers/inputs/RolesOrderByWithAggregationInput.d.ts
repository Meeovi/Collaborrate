import { RolesAvgOrderByAggregateInput } from "../inputs/RolesAvgOrderByAggregateInput";
import { RolesCountOrderByAggregateInput } from "../inputs/RolesCountOrderByAggregateInput";
import { RolesMaxOrderByAggregateInput } from "../inputs/RolesMaxOrderByAggregateInput";
import { RolesMinOrderByAggregateInput } from "../inputs/RolesMinOrderByAggregateInput";
import { RolesSumOrderByAggregateInput } from "../inputs/RolesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class RolesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    role_name?: "asc" | "desc" | undefined;
    content?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
    type?: SortOrderInput | undefined;
    createRole?: SortOrderInput | undefined;
    updateRole?: SortOrderInput | undefined;
    deleteRole?: SortOrderInput | undefined;
    publishRole?: SortOrderInput | undefined;
    unpublishRole?: SortOrderInput | undefined;
    role?: SortOrderInput | undefined;
    _count?: RolesCountOrderByAggregateInput | undefined;
    _avg?: RolesAvgOrderByAggregateInput | undefined;
    _max?: RolesMaxOrderByAggregateInput | undefined;
    _min?: RolesMinOrderByAggregateInput | undefined;
    _sum?: RolesSumOrderByAggregateInput | undefined;
}
