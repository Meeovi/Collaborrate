import type { GraphQLResolveInfo } from "graphql";
import { AggregateDashboardslidesArgs } from "./args/AggregateDashboardslidesArgs";
import { AggregateDashboardslides } from "../../outputs/AggregateDashboardslides";
export declare class AggregateDashboardslidesResolver {
    aggregateDashboardslides(ctx: any, info: GraphQLResolveInfo, args: AggregateDashboardslidesArgs): Promise<AggregateDashboardslides>;
}
