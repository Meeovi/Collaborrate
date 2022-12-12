import { SchedulerOrderByWithAggregationInput } from "../../../inputs/SchedulerOrderByWithAggregationInput";
import { SchedulerScalarWhereWithAggregatesInput } from "../../../inputs/SchedulerScalarWhereWithAggregatesInput";
import { SchedulerWhereInput } from "../../../inputs/SchedulerWhereInput";
export declare class GroupBySchedulerArgs {
    where?: SchedulerWhereInput | undefined;
    orderBy?: SchedulerOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "end_date" | "level" | "login" | "notes" | "start_date" | "whid" | "label" | "public" | "permission" | "name">;
    having?: SchedulerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
