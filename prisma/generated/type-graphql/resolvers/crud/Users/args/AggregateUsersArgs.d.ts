import { UsersOrderByWithRelationInput } from "../../../inputs/UsersOrderByWithRelationInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";
export declare class AggregateUsersArgs {
    where?: UsersWhereInput | undefined;
    orderBy?: UsersOrderByWithRelationInput[] | undefined;
    cursor?: UsersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
