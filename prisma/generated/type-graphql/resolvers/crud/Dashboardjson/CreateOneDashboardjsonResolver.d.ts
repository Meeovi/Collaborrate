import type { GraphQLResolveInfo } from "graphql";
import { CreateOneDashboardjsonArgs } from "./args/CreateOneDashboardjsonArgs";
import { Dashboardjson } from "../../../models/Dashboardjson";
export declare class CreateOneDashboardjsonResolver {
    createOneDashboardjson(ctx: any, info: GraphQLResolveInfo, args: CreateOneDashboardjsonArgs): Promise<Dashboardjson>;
}
