import { ChecklistAvgAggregate } from "../outputs/ChecklistAvgAggregate";
import { ChecklistCountAggregate } from "../outputs/ChecklistCountAggregate";
import { ChecklistMaxAggregate } from "../outputs/ChecklistMaxAggregate";
import { ChecklistMinAggregate } from "../outputs/ChecklistMinAggregate";
import { ChecklistSumAggregate } from "../outputs/ChecklistSumAggregate";
export declare class AggregateChecklist {
    _count: ChecklistCountAggregate | null;
    _avg: ChecklistAvgAggregate | null;
    _sum: ChecklistSumAggregate | null;
    _min: ChecklistMinAggregate | null;
    _max: ChecklistMaxAggregate | null;
}
