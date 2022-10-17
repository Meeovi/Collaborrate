import { ShipmentsAvgAggregate } from "../outputs/ShipmentsAvgAggregate";
import { ShipmentsCountAggregate } from "../outputs/ShipmentsCountAggregate";
import { ShipmentsMaxAggregate } from "../outputs/ShipmentsMaxAggregate";
import { ShipmentsMinAggregate } from "../outputs/ShipmentsMinAggregate";
import { ShipmentsSumAggregate } from "../outputs/ShipmentsSumAggregate";
export declare class AggregateShipments {
    _count: ShipmentsCountAggregate | null;
    _avg: ShipmentsAvgAggregate | null;
    _sum: ShipmentsSumAggregate | null;
    _min: ShipmentsMinAggregate | null;
    _max: ShipmentsMaxAggregate | null;
}
