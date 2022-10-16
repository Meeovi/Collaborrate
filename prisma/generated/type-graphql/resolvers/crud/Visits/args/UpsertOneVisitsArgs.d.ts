import { VisitsCreateInput } from "../../../inputs/VisitsCreateInput";
import { VisitsUpdateInput } from "../../../inputs/VisitsUpdateInput";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";
export declare class UpsertOneVisitsArgs {
    where: VisitsWhereUniqueInput;
    create: VisitsCreateInput;
    update: VisitsUpdateInput;
}
