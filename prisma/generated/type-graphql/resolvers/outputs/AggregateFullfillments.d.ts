import { FullfillmentsAvgAggregate } from "../outputs/FullfillmentsAvgAggregate";
import { FullfillmentsCountAggregate } from "../outputs/FullfillmentsCountAggregate";
import { FullfillmentsMaxAggregate } from "../outputs/FullfillmentsMaxAggregate";
import { FullfillmentsMinAggregate } from "../outputs/FullfillmentsMinAggregate";
import { FullfillmentsSumAggregate } from "../outputs/FullfillmentsSumAggregate";
export declare class AggregateFullfillments {
    _count: FullfillmentsCountAggregate | null;
    _avg: FullfillmentsAvgAggregate | null;
    _sum: FullfillmentsSumAggregate | null;
    _min: FullfillmentsMinAggregate | null;
    _max: FullfillmentsMaxAggregate | null;
}
