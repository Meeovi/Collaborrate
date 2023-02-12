import { SortOrderInput } from "../inputs/SortOrderInput";
import { UsersAvgOrderByAggregateInput } from "../inputs/UsersAvgOrderByAggregateInput";
import { UsersCountOrderByAggregateInput } from "../inputs/UsersCountOrderByAggregateInput";
import { UsersMaxOrderByAggregateInput } from "../inputs/UsersMaxOrderByAggregateInput";
import { UsersMinOrderByAggregateInput } from "../inputs/UsersMinOrderByAggregateInput";
import { UsersSumOrderByAggregateInput } from "../inputs/UsersSumOrderByAggregateInput";
export declare class UsersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: SortOrderInput | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    phone?: SortOrderInput | undefined;
    permissions?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
    mediamanager?: SortOrderInput | undefined;
    _count?: UsersCountOrderByAggregateInput | undefined;
    _avg?: UsersAvgOrderByAggregateInput | undefined;
    _max?: UsersMaxOrderByAggregateInput | undefined;
    _min?: UsersMinOrderByAggregateInput | undefined;
    _sum?: UsersSumOrderByAggregateInput | undefined;
}
