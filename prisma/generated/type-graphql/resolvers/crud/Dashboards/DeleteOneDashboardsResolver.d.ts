import { GraphQLResolveInfo } from "graphql";
import { DeleteOneDashboardsArgs } from "./args/DeleteOneDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
export declare class DeleteOneDashboardsResolver {
    deleteOneDashboards(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDashboardsArgs): Promise<Dashboards | null>;
}
