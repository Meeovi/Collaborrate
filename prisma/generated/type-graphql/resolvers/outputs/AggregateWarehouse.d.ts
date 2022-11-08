import { WarehouseAvgAggregate } from "../outputs/WarehouseAvgAggregate";
import { WarehouseCountAggregate } from "../outputs/WarehouseCountAggregate";
import { WarehouseMaxAggregate } from "../outputs/WarehouseMaxAggregate";
import { WarehouseMinAggregate } from "../outputs/WarehouseMinAggregate";
import { WarehouseSumAggregate } from "../outputs/WarehouseSumAggregate";
export declare class AggregateWarehouse {
    _count: WarehouseCountAggregate | null;
    _avg: WarehouseAvgAggregate | null;
    _sum: WarehouseSumAggregate | null;
    _min: WarehouseMinAggregate | null;
    _max: WarehouseMaxAggregate | null;
}
