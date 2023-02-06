import { BrandsAvgAggregate } from "../outputs/BrandsAvgAggregate";
import { BrandsCountAggregate } from "../outputs/BrandsCountAggregate";
import { BrandsMaxAggregate } from "../outputs/BrandsMaxAggregate";
import { BrandsMinAggregate } from "../outputs/BrandsMinAggregate";
import { BrandsSumAggregate } from "../outputs/BrandsSumAggregate";
export declare class BrandsGroupBy {
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
    mediamanager: string | null;
    products: string | null;
    workspaces: string | null;
    _count: BrandsCountAggregate | null;
    _avg: BrandsAvgAggregate | null;
    _sum: BrandsSumAggregate | null;
    _min: BrandsMinAggregate | null;
    _max: BrandsMaxAggregate | null;
}
