import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardjsonOrThrowArgs } from "./args/FindUniqueDashboardjsonOrThrowArgs";
import { Dashboardjson } from "../../../models/Dashboardjson";
export declare class FindUniqueDashboardjsonOrThrowResolver {
    getDashboardjson(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardjsonOrThrowArgs): Promise<Dashboardjson | null>;
}
