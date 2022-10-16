import { SchedulerCreateInput } from "../../../inputs/SchedulerCreateInput";
import { SchedulerUpdateInput } from "../../../inputs/SchedulerUpdateInput";
import { SchedulerWhereUniqueInput } from "../../../inputs/SchedulerWhereUniqueInput";
export declare class UpsertOneSchedulerArgs {
    where: SchedulerWhereUniqueInput;
    create: SchedulerCreateInput;
    update: SchedulerUpdateInput;
}
