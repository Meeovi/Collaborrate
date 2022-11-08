import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardsArgs } from "./args/FindUniqueDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
export declare class FindUniqueDashboardsResolver {
    findUniqueDashboards(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardsArgs): Promise<Dashboards | null>;
}
