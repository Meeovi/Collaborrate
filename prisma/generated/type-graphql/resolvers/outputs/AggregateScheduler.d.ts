import { SchedulerAvgAggregate } from "../outputs/SchedulerAvgAggregate";
import { SchedulerCountAggregate } from "../outputs/SchedulerCountAggregate";
import { SchedulerMaxAggregate } from "../outputs/SchedulerMaxAggregate";
import { SchedulerMinAggregate } from "../outputs/SchedulerMinAggregate";
import { SchedulerSumAggregate } from "../outputs/SchedulerSumAggregate";
export declare class AggregateScheduler {
    _count: SchedulerCountAggregate | null;
    _avg: SchedulerAvgAggregate | null;
    _sum: SchedulerSumAggregate | null;
    _min: SchedulerMinAggregate | null;
    _max: SchedulerMaxAggregate | null;
}
