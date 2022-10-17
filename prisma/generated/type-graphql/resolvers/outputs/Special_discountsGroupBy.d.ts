import { Prisma } from "@prisma/client";
import { Special_discountsAvgAggregate } from "../outputs/Special_discountsAvgAggregate";
import { Special_discountsCountAggregate } from "../outputs/Special_discountsCountAggregate";
import { Special_discountsMaxAggregate } from "../outputs/Special_discountsMaxAggregate";
import { Special_discountsMinAggregate } from "../outputs/Special_discountsMinAggregate";
import { Special_discountsSumAggregate } from "../outputs/Special_discountsSumAggregate";
export declare class Special_discountsGroupBy {
    id: number;
    name: string;
    excerpt: string | null;
    discount: Prisma.Decimal | null;
    image: string | null;
    published: Date | null;
    rewards: string | null;
    coupons: string | null;
    expiration: Date | null;
    categories: string | null;
    articles: string | null;
    products: string | null;
    customers: string | null;
    users: string | null;
    _count: Special_discountsCountAggregate | null;
    _avg: Special_discountsAvgAggregate | null;
    _sum: Special_discountsSumAggregate | null;
    _min: Special_discountsMinAggregate | null;
    _max: Special_discountsMaxAggregate | null;
}
