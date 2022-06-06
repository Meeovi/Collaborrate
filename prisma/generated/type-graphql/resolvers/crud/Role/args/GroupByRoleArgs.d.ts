import { RoleOrderByWithAggregationInput } from "../../../inputs/RoleOrderByWithAggregationInput";
import { RoleScalarWhereWithAggregatesInput } from "../../../inputs/RoleScalarWhereWithAggregatesInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";
export declare class GroupByRoleArgs {
    where?: RoleWhereInput | undefined;
    orderBy?: RoleOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "role_name">;
    having?: RoleScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
