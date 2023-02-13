import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneDashboardgraphqlArgs } from "./args/DeleteOneDashboardgraphqlArgs";
import { Dashboardgraphql } from "../../../models/Dashboardgraphql";
export declare class DeleteOneDashboardgraphqlResolver {
    deleteOneDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDashboardgraphqlArgs): Promise<Dashboardgraphql | null>;
}
