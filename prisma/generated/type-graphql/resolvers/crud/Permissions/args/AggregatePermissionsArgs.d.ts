import { PermissionsOrderByWithRelationInput } from "../../../inputs/PermissionsOrderByWithRelationInput";
import { PermissionsWhereInput } from "../../../inputs/PermissionsWhereInput";
import { PermissionsWhereUniqueInput } from "../../../inputs/PermissionsWhereUniqueInput";
export declare class AggregatePermissionsArgs {
    where?: PermissionsWhereInput | undefined;
    orderBy?: PermissionsOrderByWithRelationInput[] | undefined;
    cursor?: PermissionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
