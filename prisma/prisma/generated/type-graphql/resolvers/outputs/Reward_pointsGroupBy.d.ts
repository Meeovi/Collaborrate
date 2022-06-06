import { Prisma } from "@prisma/client";
import { Reward_pointsAvgAggregate } from "../outputs/Reward_pointsAvgAggregate";
import { Reward_pointsCountAggregate } from "../outputs/Reward_pointsCountAggregate";
import { Reward_pointsMaxAggregate } from "../outputs/Reward_pointsMaxAggregate";
import { Reward_pointsMinAggregate } from "../outputs/Reward_pointsMinAggregate";
import { Reward_pointsSumAggregate } from "../outputs/Reward_pointsSumAggregate";
export declare class Reward_pointsGroupBy {
    id: number;
    name: string;
    excerpt: string | null;
    discount: Prisma.Decimal | null;
    image: string | null;
    published: Date | null;
    coupons: string | null;
    expiration: Date | null;
    categories: string | null;
    articles: string | null;
    products: string | null;
    customers: string | null;
    users: string | null;
    _count: Reward_pointsCountAggregate | null;
    _avg: Reward_pointsAvgAggregate | null;
    _sum: Reward_pointsSumAggregate | null;
    _min: Reward_pointsMinAggregate | null;
    _max: Reward_pointsMaxAggregate | null;
}
