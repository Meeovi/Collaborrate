import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneDashboardslidesArgs } from "./args/DeleteOneDashboardslidesArgs";
import { Dashboardslides } from "../../../models/Dashboardslides";
export declare class DeleteOneDashboardslidesResolver {
    deleteOneDashboardslides(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDashboardslidesArgs): Promise<Dashboardslides | null>;
}
