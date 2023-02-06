import { ManufacturerAvgAggregate } from "../outputs/ManufacturerAvgAggregate";
import { ManufacturerCountAggregate } from "../outputs/ManufacturerCountAggregate";
import { ManufacturerMaxAggregate } from "../outputs/ManufacturerMaxAggregate";
import { ManufacturerMinAggregate } from "../outputs/ManufacturerMinAggregate";
import { ManufacturerSumAggregate } from "../outputs/ManufacturerSumAggregate";
export declare class AggregateManufacturer {
    _count: ManufacturerCountAggregate | null;
    _avg: ManufacturerAvgAggregate | null;
    _sum: ManufacturerSumAggregate | null;
    _min: ManufacturerMinAggregate | null;
    _max: ManufacturerMaxAggregate | null;
}
