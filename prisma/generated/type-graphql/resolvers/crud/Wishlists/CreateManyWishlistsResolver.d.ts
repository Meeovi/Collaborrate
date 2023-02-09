import { GraphQLResolveInfo } from "graphql";
import { CreateManyWishlistsArgs } from "./args/CreateManyWishlistsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyWishlistsResolver {
    createManyWishlists(ctx: any, info: GraphQLResolveInfo, args: CreateManyWishlistsArgs): Promise<AffectedRowsOutput>;
}
