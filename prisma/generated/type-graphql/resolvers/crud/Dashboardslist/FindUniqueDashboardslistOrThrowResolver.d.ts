import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardslistOrThrowArgs } from "./args/FindUniqueDashboardslistOrThrowArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
export declare class FindUniqueDashboardslistOrThrowResolver {
    getDashboardslist(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardslistOrThrowArgs): Promise<Dashboardslist | null>;
}
