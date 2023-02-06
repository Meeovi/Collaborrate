import { SegmentsAvgAggregate } from "../outputs/SegmentsAvgAggregate";
import { SegmentsCountAggregate } from "../outputs/SegmentsCountAggregate";
import { SegmentsMaxAggregate } from "../outputs/SegmentsMaxAggregate";
import { SegmentsMinAggregate } from "../outputs/SegmentsMinAggregate";
import { SegmentsSumAggregate } from "../outputs/SegmentsSumAggregate";
export declare class SegmentsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    description: string | null;
    website: string | null;
    status: string | null;
    apply_to: string | null;
    customers: string | null;
    _count: SegmentsCountAggregate | null;
    _avg: SegmentsAvgAggregate | null;
    _sum: SegmentsSumAggregate | null;
    _min: SegmentsMinAggregate | null;
    _max: SegmentsMaxAggregate | null;
}
