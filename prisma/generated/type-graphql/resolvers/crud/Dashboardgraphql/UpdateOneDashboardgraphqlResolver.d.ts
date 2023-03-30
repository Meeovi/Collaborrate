import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneDashboardgraphqlArgs } from "./args/UpdateOneDashboardgraphqlArgs";
import { Dashboardgraphql } from "../../../models/Dashboardgraphql";
export declare class UpdateOneDashboardgraphqlResolver {
    updateOneDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDashboardgraphqlArgs): Promise<Dashboardgraphql | null>;
}
