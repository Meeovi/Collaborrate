import { TargetsCreateInput } from "../../../inputs/TargetsCreateInput";
import { TargetsUpdateInput } from "../../../inputs/TargetsUpdateInput";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";
export declare class UpsertTargetsArgs {
    where: TargetsWhereUniqueInput;
    create: TargetsCreateInput;
    update: TargetsUpdateInput;
}
