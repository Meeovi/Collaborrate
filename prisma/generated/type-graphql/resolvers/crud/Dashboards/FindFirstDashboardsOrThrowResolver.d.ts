import { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardsOrThrowArgs } from "./args/FindFirstDashboardsOrThrowArgs";
import { Dashboards } from "../../../models/Dashboards";
export declare class FindFirstDashboardsOrThrowResolver {
    findFirstDashboardsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardsOrThrowArgs): Promise<Dashboards | null>;
}
