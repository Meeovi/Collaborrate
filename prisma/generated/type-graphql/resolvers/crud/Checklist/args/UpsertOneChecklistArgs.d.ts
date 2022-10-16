import { ChecklistCreateInput } from "../../../inputs/ChecklistCreateInput";
import { ChecklistUpdateInput } from "../../../inputs/ChecklistUpdateInput";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";
export declare class UpsertOneChecklistArgs {
    where: ChecklistWhereUniqueInput;
    create: ChecklistCreateInput;
    update: ChecklistUpdateInput;
}
