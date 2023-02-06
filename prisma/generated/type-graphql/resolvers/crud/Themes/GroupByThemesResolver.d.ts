import { GraphQLResolveInfo } from "graphql";
import { GroupByThemesArgs } from "./args/GroupByThemesArgs";
import { ThemesGroupBy } from "../../outputs/ThemesGroupBy";
export declare class GroupByThemesResolver {
    groupByThemes(ctx: any, info: GraphQLResolveInfo, args: GroupByThemesArgs): Promise<ThemesGroupBy[]>;
}
