import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardslidesOrThrowArgs } from "./args/FindUniqueDashboardslidesOrThrowArgs";
import { Dashboardslides } from "../../../models/Dashboardslides";
export declare class FindUniqueDashboardslidesOrThrowResolver {
    findUniqueDashboardslidesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardslidesOrThrowArgs): Promise<Dashboardslides | null>;
}
