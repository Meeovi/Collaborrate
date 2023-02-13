import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneDashboardrestapiArgs } from "./args/DeleteOneDashboardrestapiArgs";
import { Dashboardrestapi } from "../../../models/Dashboardrestapi";
export declare class DeleteOneDashboardrestapiResolver {
    deleteOneDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDashboardrestapiArgs): Promise<Dashboardrestapi | null>;
}
