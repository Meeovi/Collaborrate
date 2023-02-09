import { GraphQLResolveInfo } from "graphql";
import { FindFirstWishlistsOrThrowArgs } from "./args/FindFirstWishlistsOrThrowArgs";
import { Wishlists } from "../../../models/Wishlists";
export declare class FindFirstWishlistsOrThrowResolver {
    findFirstWishlistsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstWishlistsOrThrowArgs): Promise<Wishlists | null>;
}
