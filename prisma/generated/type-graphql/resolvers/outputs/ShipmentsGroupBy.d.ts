import { ShipmentsAvgAggregate } from "../outputs/ShipmentsAvgAggregate";
import { ShipmentsCountAggregate } from "../outputs/ShipmentsCountAggregate";
import { ShipmentsMaxAggregate } from "../outputs/ShipmentsMaxAggregate";
import { ShipmentsMinAggregate } from "../outputs/ShipmentsMinAggregate";
import { ShipmentsSumAggregate } from "../outputs/ShipmentsSumAggregate";
export declare class ShipmentsGroupBy {
    product: string | null;
    speed_grade: string | null;
    ship_date: Date | null;
    carrier_name: string;
    transit_time: string | null;
    tracking_url: string | null;
    image: string | null;
    id: bigint;
    client_id: string | null;
    client_secret: string | null;
    country: string | null;
    website: string | null;
    _count: ShipmentsCountAggregate | null;
    _avg: ShipmentsAvgAggregate | null;
    _sum: ShipmentsSumAggregate | null;
    _min: ShipmentsMinAggregate | null;
    _max: ShipmentsMaxAggregate | null;
}
