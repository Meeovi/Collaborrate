import { GraphQLResolveInfo } from "graphql";
import { AggregateDashboardsArgs } from "./args/AggregateDashboardsArgs";
import { AggregateDashboards } from "../../outputs/AggregateDashboards";
export declare class AggregateDashboardsResolver {
    aggregateDashboards(ctx: any, info: GraphQLResolveInfo, args: AggregateDashboardsArgs): Promise<AggregateDashboards>;
}
