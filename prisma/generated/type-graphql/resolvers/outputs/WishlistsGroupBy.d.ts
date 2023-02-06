import { WishlistsAvgAggregate } from "../outputs/WishlistsAvgAggregate";
import { WishlistsCountAggregate } from "../outputs/WishlistsCountAggregate";
import { WishlistsMaxAggregate } from "../outputs/WishlistsMaxAggregate";
import { WishlistsMinAggregate } from "../outputs/WishlistsMinAggregate";
import { WishlistsSumAggregate } from "../outputs/WishlistsSumAggregate";
export declare class WishlistsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    customers: string | null;
    visibility: string | null;
    products: string | null;
    quantity: string | null;
    occassions: string | null;
    _count: WishlistsCountAggregate | null;
    _avg: WishlistsAvgAggregate | null;
    _sum: WishlistsSumAggregate | null;
    _min: WishlistsMinAggregate | null;
    _max: WishlistsMaxAggregate | null;
}
