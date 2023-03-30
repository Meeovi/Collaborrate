import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardrestapiOrThrowArgs } from "./args/FindUniqueDashboardrestapiOrThrowArgs";
import { Dashboardrestapi } from "../../../models/Dashboardrestapi";
export declare class FindUniqueDashboardrestapiOrThrowResolver {
    getDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardrestapiOrThrowArgs): Promise<Dashboardrestapi | null>;
}
