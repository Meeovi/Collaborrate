import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneDashboardgraphqlArgs } from "./args/UpsertOneDashboardgraphqlArgs";
import { Dashboardgraphql } from "../../../models/Dashboardgraphql";
export declare class UpsertOneDashboardgraphqlResolver {
    upsertOneDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDashboardgraphqlArgs): Promise<Dashboardgraphql>;
}
