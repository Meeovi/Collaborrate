import { ReturnsAvgAggregate } from "../outputs/ReturnsAvgAggregate";
import { ReturnsCountAggregate } from "../outputs/ReturnsCountAggregate";
import { ReturnsMaxAggregate } from "../outputs/ReturnsMaxAggregate";
import { ReturnsMinAggregate } from "../outputs/ReturnsMinAggregate";
import { ReturnsSumAggregate } from "../outputs/ReturnsSumAggregate";
export declare class AggregateReturns {
    _count: ReturnsCountAggregate | null;
    _avg: ReturnsAvgAggregate | null;
    _sum: ReturnsSumAggregate | null;
    _min: ReturnsMinAggregate | null;
    _max: ReturnsMaxAggregate | null;
}
