import { GraphQLResolveInfo } from "graphql";
import { UpdateManyWishlistsArgs } from "./args/UpdateManyWishlistsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyWishlistsResolver {
    updateManyWishlists(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWishlistsArgs): Promise<AffectedRowsOutput>;
}
