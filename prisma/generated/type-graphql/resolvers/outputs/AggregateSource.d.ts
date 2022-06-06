import { SourceAvgAggregate } from "../outputs/SourceAvgAggregate";
import { SourceCountAggregate } from "../outputs/SourceCountAggregate";
import { SourceMaxAggregate } from "../outputs/SourceMaxAggregate";
import { SourceMinAggregate } from "../outputs/SourceMinAggregate";
import { SourceSumAggregate } from "../outputs/SourceSumAggregate";
export declare class AggregateSource {
    _count: SourceCountAggregate | null;
    _avg: SourceAvgAggregate | null;
    _sum: SourceSumAggregate | null;
    _min: SourceMinAggregate | null;
    _max: SourceMaxAggregate | null;
}
