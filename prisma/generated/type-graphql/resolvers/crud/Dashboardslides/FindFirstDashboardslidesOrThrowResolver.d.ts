import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardslidesOrThrowArgs } from "./args/FindFirstDashboardslidesOrThrowArgs";
import { Dashboardslides } from "../../../models/Dashboardslides";
export declare class FindFirstDashboardslidesOrThrowResolver {
    findFirstDashboardslidesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardslidesOrThrowArgs): Promise<Dashboardslides | null>;
}
