import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneDashboardslistArgs } from "./args/UpdateOneDashboardslistArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
export declare class UpdateOneDashboardslistResolver {
    updateOneDashboardslist(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDashboardslistArgs): Promise<Dashboardslist | null>;
}
