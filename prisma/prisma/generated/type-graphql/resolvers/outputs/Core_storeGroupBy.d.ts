import { Core_storeAvgAggregate } from "../outputs/Core_storeAvgAggregate";
import { Core_storeCountAggregate } from "../outputs/Core_storeCountAggregate";
import { Core_storeMaxAggregate } from "../outputs/Core_storeMaxAggregate";
import { Core_storeMinAggregate } from "../outputs/Core_storeMinAggregate";
import { Core_storeSumAggregate } from "../outputs/Core_storeSumAggregate";
export declare class Core_storeGroupBy {
    id: number;
    key: string | null;
    value: string | null;
    type: string | null;
    environment: string | null;
    tag: string | null;
    _count: Core_storeCountAggregate | null;
    _avg: Core_storeAvgAggregate | null;
    _sum: Core_storeSumAggregate | null;
    _min: Core_storeMinAggregate | null;
    _max: Core_storeMaxAggregate | null;
}
