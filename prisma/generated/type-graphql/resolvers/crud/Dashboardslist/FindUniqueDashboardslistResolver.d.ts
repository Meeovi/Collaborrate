import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardslistArgs } from "./args/FindUniqueDashboardslistArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
export declare class FindUniqueDashboardslistResolver {
    dashboardslist(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardslistArgs): Promise<Dashboardslist | null>;
}
