import { SegmentsAvgAggregate } from "../outputs/SegmentsAvgAggregate";
import { SegmentsCountAggregate } from "../outputs/SegmentsCountAggregate";
import { SegmentsMaxAggregate } from "../outputs/SegmentsMaxAggregate";
import { SegmentsMinAggregate } from "../outputs/SegmentsMinAggregate";
import { SegmentsSumAggregate } from "../outputs/SegmentsSumAggregate";
export declare class AggregateSegments {
    _count: SegmentsCountAggregate | null;
    _avg: SegmentsAvgAggregate | null;
    _sum: SegmentsSumAggregate | null;
    _min: SegmentsMinAggregate | null;
    _max: SegmentsMaxAggregate | null;
}
