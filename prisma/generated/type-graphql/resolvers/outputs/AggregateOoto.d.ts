import { OotoAvgAggregate } from "../outputs/OotoAvgAggregate";
import { OotoCountAggregate } from "../outputs/OotoCountAggregate";
import { OotoMaxAggregate } from "../outputs/OotoMaxAggregate";
import { OotoMinAggregate } from "../outputs/OotoMinAggregate";
import { OotoSumAggregate } from "../outputs/OotoSumAggregate";
export declare class AggregateOoto {
    _count: OotoCountAggregate | null;
    _avg: OotoAvgAggregate | null;
    _sum: OotoSumAggregate | null;
    _min: OotoMinAggregate | null;
    _max: OotoMaxAggregate | null;
}
