import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardjsonArgs } from "./args/FindFirstDashboardjsonArgs";
import { Dashboardjson } from "../../../models/Dashboardjson";
export declare class FindFirstDashboardjsonResolver {
    findFirstDashboardjson(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardjsonArgs): Promise<Dashboardjson | null>;
}
