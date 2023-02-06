import { GraphQLResolveInfo } from "graphql";
import { UpdateOneWishlistsArgs } from "./args/UpdateOneWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
export declare class UpdateOneWishlistsResolver {
    updateOneWishlists(ctx: any, info: GraphQLResolveInfo, args: UpdateOneWishlistsArgs): Promise<Wishlists | null>;
}
