import { DiscountsAvgAggregate } from "../outputs/DiscountsAvgAggregate";
import { DiscountsCountAggregate } from "../outputs/DiscountsCountAggregate";
import { DiscountsMaxAggregate } from "../outputs/DiscountsMaxAggregate";
import { DiscountsMinAggregate } from "../outputs/DiscountsMinAggregate";
import { DiscountsSumAggregate } from "../outputs/DiscountsSumAggregate";
export declare class DiscountsGroupBy {
    id: bigint;
    name: string;
    excerpt: string | null;
    discount: string | null;
    image: string | null;
    published: Date | null;
    special_offers: string | null;
    rewards: string | null;
    coupons: string | null;
    expiration: string | null;
    categories: string | null;
    articles: string | null;
    products: string | null;
    customers: string | null;
    users: string | null;
    type: string | null;
    _count: DiscountsCountAggregate | null;
    _avg: DiscountsAvgAggregate | null;
    _sum: DiscountsSumAggregate | null;
    _min: DiscountsMinAggregate | null;
    _max: DiscountsMaxAggregate | null;
}
