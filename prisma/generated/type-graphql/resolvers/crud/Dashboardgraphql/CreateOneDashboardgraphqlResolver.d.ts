import type { GraphQLResolveInfo } from "graphql";
import { CreateOneDashboardgraphqlArgs } from "./args/CreateOneDashboardgraphqlArgs";
import { Dashboardgraphql } from "../../../models/Dashboardgraphql";
export declare class CreateOneDashboardgraphqlResolver {
    createOneDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: CreateOneDashboardgraphqlArgs): Promise<Dashboardgraphql>;
}
