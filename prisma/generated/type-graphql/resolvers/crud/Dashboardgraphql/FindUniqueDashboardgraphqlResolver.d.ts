import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardgraphqlArgs } from "./args/FindUniqueDashboardgraphqlArgs";
import { Dashboardgraphql } from "../../../models/Dashboardgraphql";
export declare class FindUniqueDashboardgraphqlResolver {
    dashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardgraphqlArgs): Promise<Dashboardgraphql | null>;
}
