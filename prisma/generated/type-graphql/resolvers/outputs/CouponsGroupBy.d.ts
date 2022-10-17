import { CouponsAvgAggregate } from "../outputs/CouponsAvgAggregate";
import { CouponsCountAggregate } from "../outputs/CouponsCountAggregate";
import { CouponsMaxAggregate } from "../outputs/CouponsMaxAggregate";
import { CouponsMinAggregate } from "../outputs/CouponsMinAggregate";
import { CouponsSumAggregate } from "../outputs/CouponsSumAggregate";
export declare class CouponsGroupBy {
    id: bigint;
    name: string;
    excerpt: string | null;
    discount: string | null;
    image: string | null;
    published: Date | null;
    expiration: string | null;
    categories: string | null;
    articles: string | null;
    products: string | null;
    customers: string | null;
    users: string | null;
    prod_id: bigint;
    products_couponsToproducts: string | null;
    _count: CouponsCountAggregate | null;
    _avg: CouponsAvgAggregate | null;
    _sum: CouponsSumAggregate | null;
    _min: CouponsMinAggregate | null;
    _max: CouponsMaxAggregate | null;
}
