import type { GraphQLResolveInfo } from "graphql";
import { AggregateDashboardslistArgs } from "./args/AggregateDashboardslistArgs";
import { AggregateDashboardslist } from "../../outputs/AggregateDashboardslist";
export declare class AggregateDashboardslistResolver {
    aggregateDashboardslist(ctx: any, info: GraphQLResolveInfo, args: AggregateDashboardslistArgs): Promise<AggregateDashboardslist>;
}
