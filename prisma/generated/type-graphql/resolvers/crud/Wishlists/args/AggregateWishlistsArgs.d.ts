import { WishlistsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WishlistsOrderByWithRelationAndSearchRelevanceInput";
import { WishlistsWhereInput } from "../../../inputs/WishlistsWhereInput";
import { WishlistsWhereUniqueInput } from "../../../inputs/WishlistsWhereUniqueInput";
export declare class AggregateWishlistsArgs {
    where?: WishlistsWhereInput | undefined;
    orderBy?: WishlistsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: WishlistsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
