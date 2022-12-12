import { WorkspacesCreateInput } from "../../../inputs/WorkspacesCreateInput";
import { WorkspacesUpdateInput } from "../../../inputs/WorkspacesUpdateInput";
import { WorkspacesWhereUniqueInput } from "../../../inputs/WorkspacesWhereUniqueInput";
export declare class UpsertOneWorkspacesArgs {
    where: WorkspacesWhereUniqueInput;
    create: WorkspacesCreateInput;
    update: WorkspacesUpdateInput;
}
