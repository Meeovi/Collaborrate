import type { GraphQLResolveInfo } from "graphql";
import { FindManyDashboardrestapiArgs } from "./args/FindManyDashboardrestapiArgs";
import { Dashboardrestapi } from "../../../models/Dashboardrestapi";
export declare class FindManyDashboardrestapiResolver {
    dashboardrestapis(ctx: any, info: GraphQLResolveInfo, args: FindManyDashboardrestapiArgs): Promise<Dashboardrestapi[]>;
}
