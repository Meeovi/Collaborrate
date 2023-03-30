import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneDashboardjsonArgs } from "./args/UpdateOneDashboardjsonArgs";
import { Dashboardjson } from "../../../models/Dashboardjson";
export declare class UpdateOneDashboardjsonResolver {
    updateOneDashboardjson(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDashboardjsonArgs): Promise<Dashboardjson | null>;
}
