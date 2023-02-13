import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardslidesArgs } from "./args/FindUniqueDashboardslidesArgs";
import { Dashboardslides } from "../../../models/Dashboardslides";
export declare class FindUniqueDashboardslidesResolver {
    findUniqueDashboardslides(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardslidesArgs): Promise<Dashboardslides | null>;
}
