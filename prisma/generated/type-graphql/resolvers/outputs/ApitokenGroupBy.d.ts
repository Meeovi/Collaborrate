import { ApitokenAvgAggregate } from "../outputs/ApitokenAvgAggregate";
import { ApitokenCountAggregate } from "../outputs/ApitokenCountAggregate";
import { ApitokenMaxAggregate } from "../outputs/ApitokenMaxAggregate";
import { ApitokenMinAggregate } from "../outputs/ApitokenMinAggregate";
import { ApitokenSumAggregate } from "../outputs/ApitokenSumAggregate";
export declare class ApitokenGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string;
    token_type: string | null;
    description: string | null;
    token: bigint;
    _count: ApitokenCountAggregate | null;
    _avg: ApitokenAvgAggregate | null;
    _sum: ApitokenSumAggregate | null;
    _min: ApitokenMinAggregate | null;
    _max: ApitokenMaxAggregate | null;
}
