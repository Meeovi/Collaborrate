import { ZonesAvgAggregate } from "../outputs/ZonesAvgAggregate";
import { ZonesCountAggregate } from "../outputs/ZonesCountAggregate";
import { ZonesMaxAggregate } from "../outputs/ZonesMaxAggregate";
import { ZonesMinAggregate } from "../outputs/ZonesMinAggregate";
import { ZonesSumAggregate } from "../outputs/ZonesSumAggregate";
export declare class ZonesGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    updated_at: Date | null;
    scope: string | null;
    type: string | null;
    country: string | null;
    code: string | null;
    _count: ZonesCountAggregate | null;
    _avg: ZonesAvgAggregate | null;
    _sum: ZonesSumAggregate | null;
    _min: ZonesMinAggregate | null;
    _max: ZonesMaxAggregate | null;
}
