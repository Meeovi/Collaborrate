import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardgraphqlOrThrowArgs } from "./args/FindFirstDashboardgraphqlOrThrowArgs";
import { Dashboardgraphql } from "../../../models/Dashboardgraphql";
export declare class FindFirstDashboardgraphqlOrThrowResolver {
    findFirstDashboardgraphqlOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardgraphqlOrThrowArgs): Promise<Dashboardgraphql | null>;
}
