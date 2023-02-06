import { WarehouseAvgAggregate } from "../outputs/WarehouseAvgAggregate";
import { WarehouseCountAggregate } from "../outputs/WarehouseCountAggregate";
import { WarehouseMaxAggregate } from "../outputs/WarehouseMaxAggregate";
import { WarehouseMinAggregate } from "../outputs/WarehouseMinAggregate";
import { WarehouseSumAggregate } from "../outputs/WarehouseSumAggregate";
export declare class WarehouseGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    description: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postal: string | null;
    status: string | null;
    image: string | null;
    products: string | null;
    category: string | null;
    isPublic: string | null;
    _count: WarehouseCountAggregate | null;
    _avg: WarehouseAvgAggregate | null;
    _sum: WarehouseSumAggregate | null;
    _min: WarehouseMinAggregate | null;
    _max: WarehouseMaxAggregate | null;
}
