import { Gift_certificatesAvgAggregate } from "../outputs/Gift_certificatesAvgAggregate";
import { Gift_certificatesCountAggregate } from "../outputs/Gift_certificatesCountAggregate";
import { Gift_certificatesMaxAggregate } from "../outputs/Gift_certificatesMaxAggregate";
import { Gift_certificatesMinAggregate } from "../outputs/Gift_certificatesMinAggregate";
import { Gift_certificatesSumAggregate } from "../outputs/Gift_certificatesSumAggregate";
export declare class Gift_certificatesGroupBy {
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
    _count: Gift_certificatesCountAggregate | null;
    _avg: Gift_certificatesAvgAggregate | null;
    _sum: Gift_certificatesSumAggregate | null;
    _min: Gift_certificatesMinAggregate | null;
    _max: Gift_certificatesMaxAggregate | null;
}
