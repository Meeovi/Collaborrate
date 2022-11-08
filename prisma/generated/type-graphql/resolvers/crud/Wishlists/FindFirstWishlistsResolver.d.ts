import { GraphQLResolveInfo } from "graphql";
import { FindFirstWishlistsArgs } from "./args/FindFirstWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
export declare class FindFirstWishlistsResolver {
    findFirstWishlists(ctx: any, info: GraphQLResolveInfo, args: FindFirstWishlistsArgs): Promise<Wishlists | null>;
}
