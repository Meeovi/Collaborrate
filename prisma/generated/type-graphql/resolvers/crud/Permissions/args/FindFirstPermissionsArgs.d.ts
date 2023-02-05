import { PermissionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PermissionsOrderByWithRelationAndSearchRelevanceInput";
import { PermissionsWhereInput } from "../../../inputs/PermissionsWhereInput";
import { PermissionsWhereUniqueInput } from "../../../inputs/PermissionsWhereUniqueInput";
export declare class FindFirstPermissionsArgs {
    where?: PermissionsWhereInput | undefined;
    orderBy?: PermissionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PermissionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "content" | "create" | "delete" | "read" | "role" | "update" | "users"> | undefined;
}
