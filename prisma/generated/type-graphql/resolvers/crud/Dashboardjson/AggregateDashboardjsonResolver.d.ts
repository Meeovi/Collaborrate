import type { GraphQLResolveInfo } from "graphql";
import { AggregateDashboardjsonArgs } from "./args/AggregateDashboardjsonArgs";
import { AggregateDashboardjson } from "../../outputs/AggregateDashboardjson";
export declare class AggregateDashboardjsonResolver {
    aggregateDashboardjson(ctx: any, info: GraphQLResolveInfo, args: AggregateDashboardjsonArgs): Promise<AggregateDashboardjson>;
}
