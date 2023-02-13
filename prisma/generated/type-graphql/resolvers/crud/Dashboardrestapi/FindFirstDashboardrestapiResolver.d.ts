import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardrestapiArgs } from "./args/FindFirstDashboardrestapiArgs";
import { Dashboardrestapi } from "../../../models/Dashboardrestapi";
export declare class FindFirstDashboardrestapiResolver {
    findFirstDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardrestapiArgs): Promise<Dashboardrestapi | null>;
}
