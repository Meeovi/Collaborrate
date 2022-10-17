import { VisitsAvgAggregate } from "../outputs/VisitsAvgAggregate";
import { VisitsCountAggregate } from "../outputs/VisitsCountAggregate";
import { VisitsMaxAggregate } from "../outputs/VisitsMaxAggregate";
import { VisitsMinAggregate } from "../outputs/VisitsMinAggregate";
import { VisitsSumAggregate } from "../outputs/VisitsSumAggregate";
export declare class AggregateVisits {
    _count: VisitsCountAggregate | null;
    _avg: VisitsAvgAggregate | null;
    _sum: VisitsSumAggregate | null;
    _min: VisitsMinAggregate | null;
    _max: VisitsMaxAggregate | null;
}
