import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardslistArgs } from "./args/FindFirstDashboardslistArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
export declare class FindFirstDashboardslistResolver {
    findFirstDashboardslist(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardslistArgs): Promise<Dashboardslist | null>;
}
