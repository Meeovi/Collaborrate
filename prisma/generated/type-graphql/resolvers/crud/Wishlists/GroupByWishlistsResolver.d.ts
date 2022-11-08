import { GraphQLResolveInfo } from "graphql";
import { GroupByWishlistsArgs } from "./args/GroupByWishlistsArgs";
import { WishlistsGroupBy } from "../../outputs/WishlistsGroupBy";
export declare class GroupByWishlistsResolver {
    groupByWishlists(ctx: any, info: GraphQLResolveInfo, args: GroupByWishlistsArgs): Promise<WishlistsGroupBy[]>;
}
