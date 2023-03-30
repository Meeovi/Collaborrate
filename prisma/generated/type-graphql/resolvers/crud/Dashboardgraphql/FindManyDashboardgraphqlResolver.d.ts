import type { GraphQLResolveInfo } from "graphql";
import { FindManyDashboardgraphqlArgs } from "./args/FindManyDashboardgraphqlArgs";
import { Dashboardgraphql } from "../../../models/Dashboardgraphql";
export declare class FindManyDashboardgraphqlResolver {
    dashboardgraphqls(ctx: any, info: GraphQLResolveInfo, args: FindManyDashboardgraphqlArgs): Promise<Dashboardgraphql[]>;
}
