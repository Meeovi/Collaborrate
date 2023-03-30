import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneDashboardrestapiArgs } from "./args/UpsertOneDashboardrestapiArgs";
import { Dashboardrestapi } from "../../../models/Dashboardrestapi";
export declare class UpsertOneDashboardrestapiResolver {
    upsertOneDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDashboardrestapiArgs): Promise<Dashboardrestapi>;
}
