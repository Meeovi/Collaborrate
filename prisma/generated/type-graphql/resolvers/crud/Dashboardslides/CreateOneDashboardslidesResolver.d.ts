import type { GraphQLResolveInfo } from "graphql";
import { CreateOneDashboardslidesArgs } from "./args/CreateOneDashboardslidesArgs";
import { Dashboardslides } from "../../../models/Dashboardslides";
export declare class CreateOneDashboardslidesResolver {
    createOneDashboardslides(ctx: any, info: GraphQLResolveInfo, args: CreateOneDashboardslidesArgs): Promise<Dashboardslides>;
}
