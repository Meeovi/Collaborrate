import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDashboardslidesArgs } from "./args/FindFirstDashboardslidesArgs";
import { Dashboardslides } from "../../../models/Dashboardslides";
export declare class FindFirstDashboardslidesResolver {
    findFirstDashboardslides(ctx: any, info: GraphQLResolveInfo, args: FindFirstDashboardslidesArgs): Promise<Dashboardslides | null>;
}
