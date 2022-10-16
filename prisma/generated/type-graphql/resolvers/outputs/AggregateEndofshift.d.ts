import { EndofshiftAvgAggregate } from "../outputs/EndofshiftAvgAggregate";
import { EndofshiftCountAggregate } from "../outputs/EndofshiftCountAggregate";
import { EndofshiftMaxAggregate } from "../outputs/EndofshiftMaxAggregate";
import { EndofshiftMinAggregate } from "../outputs/EndofshiftMinAggregate";
import { EndofshiftSumAggregate } from "../outputs/EndofshiftSumAggregate";
export declare class AggregateEndofshift {
    _count: EndofshiftCountAggregate | null;
    _avg: EndofshiftAvgAggregate | null;
    _sum: EndofshiftSumAggregate | null;
    _min: EndofshiftMinAggregate | null;
    _max: EndofshiftMaxAggregate | null;
}
