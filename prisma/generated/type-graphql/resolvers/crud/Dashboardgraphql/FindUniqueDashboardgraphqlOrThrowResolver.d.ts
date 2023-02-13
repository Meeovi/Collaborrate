import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardgraphqlOrThrowArgs } from "./args/FindUniqueDashboardgraphqlOrThrowArgs";
import { Dashboardgraphql } from "../../../models/Dashboardgraphql";
export declare class FindUniqueDashboardgraphqlOrThrowResolver {
    getDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardgraphqlOrThrowArgs): Promise<Dashboardgraphql | null>;
}
