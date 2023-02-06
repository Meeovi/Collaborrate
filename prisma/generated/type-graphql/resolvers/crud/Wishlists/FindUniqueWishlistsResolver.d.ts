import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWishlistsArgs } from "./args/FindUniqueWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
export declare class FindUniqueWishlistsResolver {
    findUniqueWishlists(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWishlistsArgs): Promise<Wishlists | null>;
}
