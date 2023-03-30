import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardslistOrThrowArgs } from "./args/FindFirstDashboardslistOrThrowArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
export declare class FindFirstDashboardslistOrThrowResolver {
    findFirstDashboardslistOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardslistOrThrowArgs): Promise<Dashboardslist | null>;
}
