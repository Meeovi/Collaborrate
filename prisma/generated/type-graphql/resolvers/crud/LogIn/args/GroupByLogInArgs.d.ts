import { LogInOrderByWithAggregationInput } from "../../../inputs/LogInOrderByWithAggregationInput";
import { LogInScalarWhereWithAggregatesInput } from "../../../inputs/LogInScalarWhereWithAggregatesInput";
import { LogInWhereInput } from "../../../inputs/LogInWhereInput";
export declare class GroupByLogInArgs {
    where?: LogInWhereInput | undefined;
    orderBy?: LogInOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "email" | "password" | "token" | "expiresIn" | "users" | "username">;
    having?: LogInScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
