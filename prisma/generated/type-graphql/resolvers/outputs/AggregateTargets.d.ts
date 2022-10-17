import { TargetsAvgAggregate } from "../outputs/TargetsAvgAggregate";
import { TargetsCountAggregate } from "../outputs/TargetsCountAggregate";
import { TargetsMaxAggregate } from "../outputs/TargetsMaxAggregate";
import { TargetsMinAggregate } from "../outputs/TargetsMinAggregate";
import { TargetsSumAggregate } from "../outputs/TargetsSumAggregate";
export declare class AggregateTargets {
    _count: TargetsCountAggregate | null;
    _avg: TargetsAvgAggregate | null;
    _sum: TargetsSumAggregate | null;
    _min: TargetsMinAggregate | null;
    _max: TargetsMaxAggregate | null;
}
