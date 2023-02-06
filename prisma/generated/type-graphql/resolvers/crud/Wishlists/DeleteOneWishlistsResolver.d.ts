import { GraphQLResolveInfo } from "graphql";
import { DeleteOneWishlistsArgs } from "./args/DeleteOneWishlistsArgs";
import { Wishlists } from "../../../models/Wishlists";
export declare class DeleteOneWishlistsResolver {
    deleteOneWishlists(ctx: any, info: GraphQLResolveInfo, args: DeleteOneWishlistsArgs): Promise<Wishlists | null>;
}
