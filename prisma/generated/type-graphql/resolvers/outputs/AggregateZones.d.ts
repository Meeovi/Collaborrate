import { ZonesAvgAggregate } from "../outputs/ZonesAvgAggregate";
import { ZonesCountAggregate } from "../outputs/ZonesCountAggregate";
import { ZonesMaxAggregate } from "../outputs/ZonesMaxAggregate";
import { ZonesMinAggregate } from "../outputs/ZonesMinAggregate";
import { ZonesSumAggregate } from "../outputs/ZonesSumAggregate";
export declare class AggregateZones {
    _count: ZonesCountAggregate | null;
    _avg: ZonesAvgAggregate | null;
    _sum: ZonesSumAggregate | null;
    _min: ZonesMinAggregate | null;
    _max: ZonesMaxAggregate | null;
}
