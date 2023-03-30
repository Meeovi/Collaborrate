import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneDashboardjsonArgs } from "./args/UpsertOneDashboardjsonArgs";
import { Dashboardjson } from "../../../models/Dashboardjson";
export declare class UpsertOneDashboardjsonResolver {
    upsertOneDashboardjson(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDashboardjsonArgs): Promise<Dashboardjson>;
}
