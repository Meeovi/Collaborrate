import { PermissionsOrderByWithAggregationInput } from "../../../inputs/PermissionsOrderByWithAggregationInput";
import { PermissionsScalarWhereWithAggregatesInput } from "../../../inputs/PermissionsScalarWhereWithAggregatesInput";
import { PermissionsWhereInput } from "../../../inputs/PermissionsWhereInput";
export declare class GroupByPermissionsArgs {
    where?: PermissionsWhereInput | undefined;
    orderBy?: PermissionsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "content" | "create" | "delete" | "read" | "role" | "update" | "users">;
    having?: PermissionsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
