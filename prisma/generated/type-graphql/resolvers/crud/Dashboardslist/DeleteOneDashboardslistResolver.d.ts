import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneDashboardslistArgs } from "./args/DeleteOneDashboardslistArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
export declare class DeleteOneDashboardslistResolver {
    deleteOneDashboardslist(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDashboardslistArgs): Promise<Dashboardslist | null>;
}
