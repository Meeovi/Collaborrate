import { GraphQLResolveInfo } from "graphql";
import { UpsertOneDashboardsArgs } from "./args/UpsertOneDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
export declare class UpsertOneDashboardsResolver {
    upsertOneDashboards(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDashboardsArgs): Promise<Dashboards>;
}
