import { GraphQLResolveInfo } from "graphql";
import { FindManyWishlistsArgs } from "./args/FindManyWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
export declare class FindManyWishlistsResolver {
    findManyWishlists(ctx: any, info: GraphQLResolveInfo, args: FindManyWishlistsArgs): Promise<Wishlists[]>;
}
