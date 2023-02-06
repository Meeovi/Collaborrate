import { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardsArgs } from "./args/FindFirstDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
export declare class FindFirstDashboardsResolver {
    findFirstDashboards(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardsArgs): Promise<Dashboards | null>;
}
