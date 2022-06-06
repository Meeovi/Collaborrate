import { GraphQLResolveInfo } from "graphql";
import { GroupByGeneral_settingsArgs } from "./args/GroupByGeneral_settingsArgs";
import { General_settingsGroupBy } from "../../outputs/General_settingsGroupBy";
export declare class GroupByGeneral_settingsResolver {
    groupByGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: GroupByGeneral_settingsArgs): Promise<General_settingsGroupBy[]>;
}
