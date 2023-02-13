import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardjsonOrThrowArgs } from "./args/FindFirstDashboardjsonOrThrowArgs";
import { Dashboardjson } from "../../../models/Dashboardjson";
export declare class FindFirstDashboardjsonOrThrowResolver {
    findFirstDashboardjsonOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardjsonOrThrowArgs): Promise<Dashboardjson | null>;
}
