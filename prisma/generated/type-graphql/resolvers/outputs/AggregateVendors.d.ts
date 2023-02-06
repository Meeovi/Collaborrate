import { VendorsAvgAggregate } from "../outputs/VendorsAvgAggregate";
import { VendorsCountAggregate } from "../outputs/VendorsCountAggregate";
import { VendorsMaxAggregate } from "../outputs/VendorsMaxAggregate";
import { VendorsMinAggregate } from "../outputs/VendorsMinAggregate";
import { VendorsSumAggregate } from "../outputs/VendorsSumAggregate";
export declare class AggregateVendors {
    _count: VendorsCountAggregate | null;
    _avg: VendorsAvgAggregate | null;
    _sum: VendorsSumAggregate | null;
    _min: VendorsMinAggregate | null;
    _max: VendorsMaxAggregate | null;
}
