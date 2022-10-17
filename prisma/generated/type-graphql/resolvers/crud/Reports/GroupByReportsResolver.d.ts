import { GraphQLResolveInfo } from "graphql";
import { GroupByReportsArgs } from "./args/GroupByReportsArgs";
import { ReportsGroupBy } from "../../outputs/ReportsGroupBy";
export declare class GroupByReportsResolver {
    groupByReports(ctx: any, info: GraphQLResolveInfo, args: GroupByReportsArgs): Promise<ReportsGroupBy[]>;
}
