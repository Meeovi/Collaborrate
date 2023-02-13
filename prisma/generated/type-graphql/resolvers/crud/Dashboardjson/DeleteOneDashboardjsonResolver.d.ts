import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneDashboardjsonArgs } from "./args/DeleteOneDashboardjsonArgs";
import { Dashboardjson } from "../../../models/Dashboardjson";
export declare class DeleteOneDashboardjsonResolver {
    deleteOneDashboardjson(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDashboardjsonArgs): Promise<Dashboardjson | null>;
}
