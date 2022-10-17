import { RolesOrderByWithAggregationInput } from "../../../inputs/RolesOrderByWithAggregationInput";
import { RolesScalarWhereWithAggregatesInput } from "../../../inputs/RolesScalarWhereWithAggregatesInput";
import { RolesWhereInput } from "../../../inputs/RolesWhereInput";
export declare class GroupByRolesArgs {
    where?: RolesWhereInput | undefined;
    orderBy?: RolesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "role_name" | "content" | "created_at">;
    having?: RolesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
