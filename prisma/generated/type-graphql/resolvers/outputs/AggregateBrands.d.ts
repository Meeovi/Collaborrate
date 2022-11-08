import { BrandsAvgAggregate } from "../outputs/BrandsAvgAggregate";
import { BrandsCountAggregate } from "../outputs/BrandsCountAggregate";
import { BrandsMaxAggregate } from "../outputs/BrandsMaxAggregate";
import { BrandsMinAggregate } from "../outputs/BrandsMinAggregate";
import { BrandsSumAggregate } from "../outputs/BrandsSumAggregate";
export declare class AggregateBrands {
    _count: BrandsCountAggregate | null;
    _avg: BrandsAvgAggregate | null;
    _sum: BrandsSumAggregate | null;
    _min: BrandsMinAggregate | null;
    _max: BrandsMaxAggregate | null;
}
