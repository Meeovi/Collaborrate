import { Special_discountsAvgAggregate } from "../outputs/Special_discountsAvgAggregate";
import { Special_discountsCountAggregate } from "../outputs/Special_discountsCountAggregate";
import { Special_discountsMaxAggregate } from "../outputs/Special_discountsMaxAggregate";
import { Special_discountsMinAggregate } from "../outputs/Special_discountsMinAggregate";
import { Special_discountsSumAggregate } from "../outputs/Special_discountsSumAggregate";
export declare class AggregateSpecial_discounts {
    _count: Special_discountsCountAggregate | null;
    _avg: Special_discountsAvgAggregate | null;
    _sum: Special_discountsSumAggregate | null;
    _min: Special_discountsMinAggregate | null;
    _max: Special_discountsMaxAggregate | null;
}
