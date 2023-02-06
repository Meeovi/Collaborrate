import { GraphQLResolveInfo } from "graphql";
import { DeleteManyWishlistsArgs } from "./args/DeleteManyWishlistsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyWishlistsResolver {
    deleteManyWishlists(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWishlistsArgs): Promise<AffectedRowsOutput>;
}
