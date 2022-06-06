import { GraphQLResolveInfo } from "graphql";
import { GroupByShopsArgs } from "./args/GroupByShopsArgs";
import { ShopsGroupBy } from "../../outputs/ShopsGroupBy";
export declare class GroupByShopsResolver {
    groupByShops(ctx: any, info: GraphQLResolveInfo, args: GroupByShopsArgs): Promise<ShopsGroupBy[]>;
}
