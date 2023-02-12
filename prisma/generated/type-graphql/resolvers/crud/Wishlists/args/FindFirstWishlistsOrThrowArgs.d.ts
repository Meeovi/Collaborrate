import { WishlistsOrderByWithRelationInput } from "../../../inputs/WishlistsOrderByWithRelationInput";
import { WishlistsWhereInput } from "../../../inputs/WishlistsWhereInput";
import { WishlistsWhereUniqueInput } from "../../../inputs/WishlistsWhereUniqueInput";
export declare class FindFirstWishlistsOrThrowArgs {
    where?: WishlistsWhereInput | undefined;
    orderBy?: WishlistsOrderByWithRelationInput[] | undefined;
    cursor?: WishlistsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "customers" | "visibility" | "products" | "quantity" | "occassions"> | undefined;
}
