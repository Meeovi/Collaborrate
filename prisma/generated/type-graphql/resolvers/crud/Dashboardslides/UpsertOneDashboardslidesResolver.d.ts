import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneDashboardslidesArgs } from "./args/UpsertOneDashboardslidesArgs";
import { Dashboardslides } from "../../../models/Dashboardslides";
export declare class UpsertOneDashboardslidesResolver {
    upsertOneDashboardslides(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDashboardslidesArgs): Promise<Dashboardslides>;
}
