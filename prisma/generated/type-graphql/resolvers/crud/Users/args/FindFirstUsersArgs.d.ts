import { UsersOrderByWithRelationInput } from "../../../inputs/UsersOrderByWithRelationInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";
export declare class FindFirstUsersArgs {
    where?: UsersWhereInput | undefined;
    orderBy?: UsersOrderByWithRelationInput[] | undefined;
    cursor?: UsersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "username" | "first_name" | "last_name" | "email" | "password" | "interface_locale" | "value" | "permissions" | "created_at"> | undefined;
}
