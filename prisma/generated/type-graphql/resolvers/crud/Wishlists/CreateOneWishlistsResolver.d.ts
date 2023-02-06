import { GraphQLResolveInfo } from "graphql";
import { CreateOneWishlistsArgs } from "./args/CreateOneWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
export declare class CreateOneWishlistsResolver {
    createOneWishlists(ctx: any, info: GraphQLResolveInfo, args: CreateOneWishlistsArgs): Promise<Wishlists>;
}
