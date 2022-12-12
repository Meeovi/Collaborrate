import { WishlistsAvgAggregate } from "../outputs/WishlistsAvgAggregate";
import { WishlistsCountAggregate } from "../outputs/WishlistsCountAggregate";
import { WishlistsMaxAggregate } from "../outputs/WishlistsMaxAggregate";
import { WishlistsMinAggregate } from "../outputs/WishlistsMinAggregate";
import { WishlistsSumAggregate } from "../outputs/WishlistsSumAggregate";
export declare class AggregateWishlists {
    _count: WishlistsCountAggregate | null;
    _avg: WishlistsAvgAggregate | null;
    _sum: WishlistsSumAggregate | null;
    _min: WishlistsMinAggregate | null;
    _max: WishlistsMaxAggregate | null;
}
