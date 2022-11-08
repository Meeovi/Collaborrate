import { OotoAvgAggregate } from "../outputs/OotoAvgAggregate";
import { OotoCountAggregate } from "../outputs/OotoCountAggregate";
import { OotoMaxAggregate } from "../outputs/OotoMaxAggregate";
import { OotoMinAggregate } from "../outputs/OotoMinAggregate";
import { OotoSumAggregate } from "../outputs/OotoSumAggregate";
export declare class OotoGroupBy {
    id: bigint;
    created_at: Date | null;
    login: string | null;
    start_date: string | null;
    end_date: string | null;
    note: string | null;
    using_time: string | null;
    location: string | null;
    _count: OotoCountAggregate | null;
    _avg: OotoAvgAggregate | null;
    _sum: OotoSumAggregate | null;
    _min: OotoMinAggregate | null;
    _max: OotoMaxAggregate | null;
}
