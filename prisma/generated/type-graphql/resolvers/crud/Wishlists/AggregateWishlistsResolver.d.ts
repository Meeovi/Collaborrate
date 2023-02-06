import { GraphQLResolveInfo } from "graphql";
import { AggregateWishlistsArgs } from "./args/AggregateWishlistsArgs";
import { AggregateWishlists } from "../../outputs/AggregateWishlists";
export declare class AggregateWishlistsResolver {
    aggregateWishlists(ctx: any, info: GraphQLResolveInfo, args: AggregateWishlistsArgs): Promise<AggregateWishlists>;
}
