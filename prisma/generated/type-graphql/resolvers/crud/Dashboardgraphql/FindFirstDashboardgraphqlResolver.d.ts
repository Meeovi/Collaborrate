import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardgraphqlArgs } from "./args/FindFirstDashboardgraphqlArgs";
import { Dashboardgraphql } from "../../../models/Dashboardgraphql";
export declare class FindFirstDashboardgraphqlResolver {
    findFirstDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardgraphqlArgs): Promise<Dashboardgraphql | null>;
}
