import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneDashboardrestapiArgs } from "./args/UpdateOneDashboardrestapiArgs";
import { Dashboardrestapi } from "../../../models/Dashboardrestapi";
export declare class UpdateOneDashboardrestapiResolver {
    updateOneDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDashboardrestapiArgs): Promise<Dashboardrestapi | null>;
}
