import { GraphQLResolveInfo } from "graphql";
import { UpdateOneDashboardsArgs } from "./args/UpdateOneDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
export declare class UpdateOneDashboardsResolver {
    updateOneDashboards(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDashboardsArgs): Promise<Dashboards | null>;
}
