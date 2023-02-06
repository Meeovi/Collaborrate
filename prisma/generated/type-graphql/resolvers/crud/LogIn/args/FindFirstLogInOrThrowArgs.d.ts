import { LogInOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/LogInOrderByWithRelationAndSearchRelevanceInput";
import { LogInWhereInput } from "../../../inputs/LogInWhereInput";
import { LogInWhereUniqueInput } from "../../../inputs/LogInWhereUniqueInput";
export declare class FindFirstLogInOrThrowArgs {
    where?: LogInWhereInput | undefined;
    orderBy?: LogInOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: LogInWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "email" | "password" | "token" | "expiresIn" | "users" | "username"> | undefined;
}
