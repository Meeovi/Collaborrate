import { GraphQLResolveInfo } from "graphql";
import { GroupBySales_settingsArgs } from "./args/GroupBySales_settingsArgs";
import { Sales_settingsGroupBy } from "../../outputs/Sales_settingsGroupBy";
export declare class GroupBySales_settingsResolver {
    groupBySales_settings(ctx: any, info: GraphQLResolveInfo, args: GroupBySales_settingsArgs): Promise<Sales_settingsGroupBy[]>;
}
