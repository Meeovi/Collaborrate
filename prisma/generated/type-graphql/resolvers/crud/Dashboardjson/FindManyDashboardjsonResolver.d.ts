import type { GraphQLResolveInfo } from "graphql";
import { FindManyDashboardjsonArgs } from "./args/FindManyDashboardjsonArgs";
import { Dashboardjson } from "../../../models/Dashboardjson";
export declare class FindManyDashboardjsonResolver {
    dashboardjsons(ctx: any, info: GraphQLResolveInfo, args: FindManyDashboardjsonArgs): Promise<Dashboardjson[]>;
}
