import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardrestapiArgs } from "./args/FindUniqueDashboardrestapiArgs";
import { Dashboardrestapi } from "../../../models/Dashboardrestapi";
export declare class FindUniqueDashboardrestapiResolver {
    dashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardrestapiArgs): Promise<Dashboardrestapi | null>;
}
