import { CouponsAvgAggregate } from "../outputs/CouponsAvgAggregate";
import { CouponsCountAggregate } from "../outputs/CouponsCountAggregate";
import { CouponsMaxAggregate } from "../outputs/CouponsMaxAggregate";
import { CouponsMinAggregate } from "../outputs/CouponsMinAggregate";
import { CouponsSumAggregate } from "../outputs/CouponsSumAggregate";
export declare class AggregateCoupons {
    _count: CouponsCountAggregate | null;
    _avg: CouponsAvgAggregate | null;
    _sum: CouponsSumAggregate | null;
    _min: CouponsMinAggregate | null;
    _max: CouponsMaxAggregate | null;
}
