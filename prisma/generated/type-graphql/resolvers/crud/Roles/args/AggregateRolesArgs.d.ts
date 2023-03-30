import { RolesOrderByWithRelationInput } from "../../../inputs/RolesOrderByWithRelationInput";
import { RolesWhereInput } from "../../../inputs/RolesWhereInput";
import { RolesWhereUniqueInput } from "../../../inputs/RolesWhereUniqueInput";
export declare class AggregateRolesArgs {
    where?: RolesWhereInput | undefined;
    orderBy?: RolesOrderByWithRelationInput[] | undefined;
    cursor?: RolesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
