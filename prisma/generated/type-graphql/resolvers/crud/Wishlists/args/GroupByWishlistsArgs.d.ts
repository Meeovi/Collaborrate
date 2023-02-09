import { WishlistsOrderByWithAggregationInput } from "../../../inputs/WishlistsOrderByWithAggregationInput";
import { WishlistsScalarWhereWithAggregatesInput } from "../../../inputs/WishlistsScalarWhereWithAggregatesInput";
import { WishlistsWhereInput } from "../../../inputs/WishlistsWhereInput";
export declare class GroupByWishlistsArgs {
    where?: WishlistsWhereInput | undefined;
    orderBy?: WishlistsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "customers" | "visibility" | "products" | "quantity" | "occassions">;
    having?: WishlistsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
