import { PermissionsAvgOrderByAggregateInput } from "../inputs/PermissionsAvgOrderByAggregateInput";
import { PermissionsCountOrderByAggregateInput } from "../inputs/PermissionsCountOrderByAggregateInput";
import { PermissionsMaxOrderByAggregateInput } from "../inputs/PermissionsMaxOrderByAggregateInput";
import { PermissionsMinOrderByAggregateInput } from "../inputs/PermissionsMinOrderByAggregateInput";
import { PermissionsSumOrderByAggregateInput } from "../inputs/PermissionsSumOrderByAggregateInput";
export declare class PermissionsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    _count?: PermissionsCountOrderByAggregateInput | undefined;
    _avg?: PermissionsAvgOrderByAggregateInput | undefined;
    _max?: PermissionsMaxOrderByAggregateInput | undefined;
    _min?: PermissionsMinOrderByAggregateInput | undefined;
    _sum?: PermissionsSumOrderByAggregateInput | undefined;
}
