import { PermissionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PermissionsOrderByWithRelationAndSearchRelevanceInput";
import { PermissionsWhereInput } from "../../../inputs/PermissionsWhereInput";
import { PermissionsWhereUniqueInput } from "../../../inputs/PermissionsWhereUniqueInput";
export declare class AggregatePermissionsArgs {
    where?: PermissionsWhereInput | undefined;
    orderBy?: PermissionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PermissionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
