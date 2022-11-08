import { UsersAvgOrderByAggregateInput } from "../inputs/UsersAvgOrderByAggregateInput";
import { UsersCountOrderByAggregateInput } from "../inputs/UsersCountOrderByAggregateInput";
import { UsersMaxOrderByAggregateInput } from "../inputs/UsersMaxOrderByAggregateInput";
import { UsersMinOrderByAggregateInput } from "../inputs/UsersMinOrderByAggregateInput";
import { UsersSumOrderByAggregateInput } from "../inputs/UsersSumOrderByAggregateInput";
export declare class UsersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    interface_locale?: "asc" | "desc" | undefined;
    value?: "asc" | "desc" | undefined;
    permissions?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    emails?: "asc" | "desc" | undefined;
    mediamanager?: "asc" | "desc" | undefined;
    messages?: "asc" | "desc" | undefined;
    projects?: "asc" | "desc" | undefined;
    workspaces?: "asc" | "desc" | undefined;
    _count?: UsersCountOrderByAggregateInput | undefined;
    _avg?: UsersAvgOrderByAggregateInput | undefined;
    _max?: UsersMaxOrderByAggregateInput | undefined;
    _min?: UsersMinOrderByAggregateInput | undefined;
    _sum?: UsersSumOrderByAggregateInput | undefined;
}
