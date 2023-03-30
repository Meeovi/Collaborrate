import type { GraphQLResolveInfo } from "graphql";
import { FindManyDashboardslidesArgs } from "./args/FindManyDashboardslidesArgs";
import { Dashboardslides } from "../../../models/Dashboardslides";
export declare class FindManyDashboardslidesResolver {
    findManyDashboardslides(ctx: any, info: GraphQLResolveInfo, args: FindManyDashboardslidesArgs): Promise<Dashboardslides[]>;
}
