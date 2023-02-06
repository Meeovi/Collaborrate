import { GraphQLResolveInfo } from "graphql";
import { GroupBySettingsArgs } from "./args/GroupBySettingsArgs";
import { SettingsGroupBy } from "../../outputs/SettingsGroupBy";
export declare class GroupBySettingsResolver {
    groupBySettings(ctx: any, info: GraphQLResolveInfo, args: GroupBySettingsArgs): Promise<SettingsGroupBy[]>;
}
