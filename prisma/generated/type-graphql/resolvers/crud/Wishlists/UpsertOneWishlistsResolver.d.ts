import { GraphQLResolveInfo } from "graphql";
import { UpsertOneWishlistsArgs } from "./args/UpsertOneWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
export declare class UpsertOneWishlistsResolver {
    upsertOneWishlists(ctx: any, info: GraphQLResolveInfo, args: UpsertOneWishlistsArgs): Promise<Wishlists>;
}
