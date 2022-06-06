import { ReturnsAvgAggregate } from "../outputs/ReturnsAvgAggregate";
import { ReturnsCountAggregate } from "../outputs/ReturnsCountAggregate";
import { ReturnsMaxAggregate } from "../outputs/ReturnsMaxAggregate";
import { ReturnsMinAggregate } from "../outputs/ReturnsMinAggregate";
import { ReturnsSumAggregate } from "../outputs/ReturnsSumAggregate";
export declare class ReturnsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    validity: string | null;
    return_prefix: string | null;
    prod_id: bigint;
    cust_id: number;
    _count: ReturnsCountAggregate | null;
    _avg: ReturnsAvgAggregate | null;
    _sum: ReturnsSumAggregate | null;
    _min: ReturnsMinAggregate | null;
    _max: ReturnsMaxAggregate | null;
}
