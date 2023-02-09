import { UsersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/UsersOrderByWithRelationAndSearchRelevanceInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";
export declare class FindFirstUsersOrThrowArgs {
    where?: UsersWhereInput | undefined;
    orderBy?: UsersOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: UsersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "username" | "first_name" | "last_name" | "email" | "password" | "phone" | "permissions" | "created_at" | "mediamanager"> | undefined;
}
