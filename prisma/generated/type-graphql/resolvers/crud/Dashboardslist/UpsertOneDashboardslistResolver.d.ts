import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneDashboardslistArgs } from "./args/UpsertOneDashboardslistArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
export declare class UpsertOneDashboardslistResolver {
    upsertOneDashboardslist(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDashboardslistArgs): Promise<Dashboardslist>;
}
