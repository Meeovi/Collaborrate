import { GraphQLResolveInfo } from "graphql";
import { GroupByShop_settingsArgs } from "./args/GroupByShop_settingsArgs";
import { Shop_settingsGroupBy } from "../../outputs/Shop_settingsGroupBy";
export declare class GroupByShop_settingsResolver {
    groupByShop_settings(ctx: any, info: GraphQLResolveInfo, args: GroupByShop_settingsArgs): Promise<Shop_settingsGroupBy[]>;
}
