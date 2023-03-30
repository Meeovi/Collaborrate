import { ManufacturerAvgAggregate } from "../outputs/ManufacturerAvgAggregate";
import { ManufacturerCountAggregate } from "../outputs/ManufacturerCountAggregate";
import { ManufacturerMaxAggregate } from "../outputs/ManufacturerMaxAggregate";
import { ManufacturerMinAggregate } from "../outputs/ManufacturerMinAggregate";
import { ManufacturerSumAggregate } from "../outputs/ManufacturerSumAggregate";
export declare class ManufacturerGroupBy {
    id: bigint;
    created_at: Date | null;
    code: string | null;
    name: string | null;
    country: string | null;
    state: string | null;
    isPublic: string | null;
    city: string | null;
    product: bigint | null;
    description: string | null;
    media: string | null;
    products: string | null;
    _count: ManufacturerCountAggregate | null;
    _avg: ManufacturerAvgAggregate | null;
    _sum: ManufacturerSumAggregate | null;
    _min: ManufacturerMinAggregate | null;
    _max: ManufacturerMaxAggregate | null;
}
