import type { GraphQLResolveInfo } from "graphql";
import { CreateOneDashboardrestapiArgs } from "./args/CreateOneDashboardrestapiArgs";
import { Dashboardrestapi } from "../../../models/Dashboardrestapi";
export declare class CreateOneDashboardrestapiResolver {
    createOneDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: CreateOneDashboardrestapiArgs): Promise<Dashboardrestapi>;
}
