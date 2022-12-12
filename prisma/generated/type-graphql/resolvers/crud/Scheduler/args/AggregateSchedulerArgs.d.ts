import { SchedulerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SchedulerOrderByWithRelationAndSearchRelevanceInput";
import { SchedulerWhereInput } from "../../../inputs/SchedulerWhereInput";
import { SchedulerWhereUniqueInput } from "../../../inputs/SchedulerWhereUniqueInput";
export declare class AggregateSchedulerArgs {
    where?: SchedulerWhereInput | undefined;
    orderBy?: SchedulerOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SchedulerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
