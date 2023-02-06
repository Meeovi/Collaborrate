import { DiscountsAvgAggregate } from "../outputs/DiscountsAvgAggregate";
import { DiscountsCountAggregate } from "../outputs/DiscountsCountAggregate";
import { DiscountsMaxAggregate } from "../outputs/DiscountsMaxAggregate";
import { DiscountsMinAggregate } from "../outputs/DiscountsMinAggregate";
import { DiscountsSumAggregate } from "../outputs/DiscountsSumAggregate";
export declare class AggregateDiscounts {
    _count: DiscountsCountAggregate | null;
    _avg: DiscountsAvgAggregate | null;
    _sum: DiscountsSumAggregate | null;
    _min: DiscountsMinAggregate | null;
    _max: DiscountsMaxAggregate | null;
}
