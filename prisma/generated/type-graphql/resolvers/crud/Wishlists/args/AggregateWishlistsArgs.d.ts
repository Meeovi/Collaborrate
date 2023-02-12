import { WishlistsOrderByWithRelationInput } from "../../../inputs/WishlistsOrderByWithRelationInput";
import { WishlistsWhereInput } from "../../../inputs/WishlistsWhereInput";
import { WishlistsWhereUniqueInput } from "../../../inputs/WishlistsWhereUniqueInput";
export declare class AggregateWishlistsArgs {
    where?: WishlistsWhereInput | undefined;
    orderBy?: WishlistsOrderByWithRelationInput[] | undefined;
    cursor?: WishlistsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
