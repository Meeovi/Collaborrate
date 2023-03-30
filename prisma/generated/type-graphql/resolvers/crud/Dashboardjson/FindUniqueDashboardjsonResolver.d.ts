import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardjsonArgs } from "./args/FindUniqueDashboardjsonArgs";
import { Dashboardjson } from "../../../models/Dashboardjson";
export declare class FindUniqueDashboardjsonResolver {
    dashboardjson(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardjsonArgs): Promise<Dashboardjson | null>;
}
