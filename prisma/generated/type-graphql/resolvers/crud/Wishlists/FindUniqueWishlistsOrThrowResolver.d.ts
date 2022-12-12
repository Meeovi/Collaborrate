import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWishlistsOrThrowArgs } from "./args/FindUniqueWishlistsOrThrowArgs";
import { Wishlists } from "../../../models/Wishlists";
export declare class FindUniqueWishlistsOrThrowResolver {
    findUniqueWishlistsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWishlistsOrThrowArgs): Promise<Wishlists | null>;
}
