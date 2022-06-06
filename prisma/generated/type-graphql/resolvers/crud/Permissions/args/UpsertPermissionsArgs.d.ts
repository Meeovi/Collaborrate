import { PermissionsCreateInput } from "../../../inputs/PermissionsCreateInput";
import { PermissionsUpdateInput } from "../../../inputs/PermissionsUpdateInput";
import { PermissionsWhereUniqueInput } from "../../../inputs/PermissionsWhereUniqueInput";
export declare class UpsertPermissionsArgs {
    where: PermissionsWhereUniqueInput;
    create: PermissionsCreateInput;
    update: PermissionsUpdateInput;
}
