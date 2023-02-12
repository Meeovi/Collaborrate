import { PermissionsAvgOrderByAggregateInput } from "../inputs/PermissionsAvgOrderByAggregateInput";
import { PermissionsCountOrderByAggregateInput } from "../inputs/PermissionsCountOrderByAggregateInput";
import { PermissionsMaxOrderByAggregateInput } from "../inputs/PermissionsMaxOrderByAggregateInput";
import { PermissionsMinOrderByAggregateInput } from "../inputs/PermissionsMinOrderByAggregateInput";
import { PermissionsSumOrderByAggregateInput } from "../inputs/PermissionsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PermissionsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    create?: SortOrderInput | undefined;
    delete?: SortOrderInput | undefined;
    read?: SortOrderInput | undefined;
    role?: SortOrderInput | undefined;
    update?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
    _count?: PermissionsCountOrderByAggregateInput | undefined;
    _avg?: PermissionsAvgOrderByAggregateInput | undefined;
    _max?: PermissionsMaxOrderByAggregateInput | undefined;
    _min?: PermissionsMinOrderByAggregateInput | undefined;
    _sum?: PermissionsSumOrderByAggregateInput | undefined;
}
