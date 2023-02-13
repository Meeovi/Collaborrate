import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardrestapiOrThrowArgs } from "./args/FindFirstDashboardrestapiOrThrowArgs";
import { Dashboardrestapi } from "../../../models/Dashboardrestapi";
export declare class FindFirstDashboardrestapiOrThrowResolver {
    findFirstDashboardrestapiOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardrestapiOrThrowArgs): Promise<Dashboardrestapi | null>;
}
