import { RolesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/RolesOrderByWithRelationAndSearchRelevanceInput";
import { RolesWhereInput } from "../../../inputs/RolesWhereInput";
import { RolesWhereUniqueInput } from "../../../inputs/RolesWhereUniqueInput";
export declare class AggregateRolesArgs {
    where?: RolesWhereInput | undefined;
    orderBy?: RolesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: RolesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
