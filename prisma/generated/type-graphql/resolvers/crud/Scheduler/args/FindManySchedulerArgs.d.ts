import { SchedulerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SchedulerOrderByWithRelationAndSearchRelevanceInput";
import { SchedulerWhereInput } from "../../../inputs/SchedulerWhereInput";
import { SchedulerWhereUniqueInput } from "../../../inputs/SchedulerWhereUniqueInput";
export declare class FindManySchedulerArgs {
    where?: SchedulerWhereInput | undefined;
    orderBy?: SchedulerOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SchedulerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "end_date" | "level" | "login" | "notes" | "start_date" | "whid"> | undefined;
}
