import { UsersOrderByWithAggregationInput } from "../../../inputs/UsersOrderByWithAggregationInput";
import { UsersScalarWhereWithAggregatesInput } from "../../../inputs/UsersScalarWhereWithAggregatesInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
export declare class GroupByUsersArgs {
    where?: UsersWhereInput | undefined;
    orderBy?: UsersOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "username" | "first_name" | "last_name" | "email" | "password" | "interface_locale" | "value" | "permissions" | "created_at" | "emails" | "mediamanager" | "messages" | "projects" | "workspaces">;
    having?: UsersScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
