import { UsersOrderByWithAggregationInput } from "../../../inputs/UsersOrderByWithAggregationInput";
import { UsersScalarWhereWithAggregatesInput } from "../../../inputs/UsersScalarWhereWithAggregatesInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
export declare class GroupByUsersArgs {
    where?: UsersWhereInput | undefined;
    orderBy?: UsersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "username" | "first_name" | "last_name" | "email" | "password" | "phone" | "permissions" | "created_at" | "mediamanager">;
    having?: UsersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
