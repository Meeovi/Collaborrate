import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneDashboardslidesArgs } from "./args/UpdateOneDashboardslidesArgs";
import { Dashboardslides } from "../../../models/Dashboardslides";
export declare class UpdateOneDashboardslidesResolver {
    updateOneDashboardslides(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDashboardslidesArgs): Promise<Dashboardslides | null>;
}
