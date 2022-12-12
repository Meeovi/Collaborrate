import { SchedulerAvgAggregate } from "../outputs/SchedulerAvgAggregate";
import { SchedulerCountAggregate } from "../outputs/SchedulerCountAggregate";
import { SchedulerMaxAggregate } from "../outputs/SchedulerMaxAggregate";
import { SchedulerMinAggregate } from "../outputs/SchedulerMinAggregate";
import { SchedulerSumAggregate } from "../outputs/SchedulerSumAggregate";
export declare class SchedulerGroupBy {
    id: bigint;
    created_at: Date | null;
    end_date: string | null;
    level: string | null;
    login: string | null;
    notes: string | null;
    start_date: string | null;
    whid: string | null;
    label: string | null;
    public: string | null;
    permission: string | null;
    name: string | null;
    _count: SchedulerCountAggregate | null;
    _avg: SchedulerAvgAggregate | null;
    _sum: SchedulerSumAggregate | null;
    _min: SchedulerMinAggregate | null;
    _max: SchedulerMaxAggregate | null;
}
