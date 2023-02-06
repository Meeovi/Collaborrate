import { GraphQLResolveInfo } from "graphql";
import { FindManyDashboardsArgs } from "./args/FindManyDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
export declare class FindManyDashboardsResolver {
    findManyDashboards(ctx: any, info: GraphQLResolveInfo, args: FindManyDashboardsArgs): Promise<Dashboards[]>;
}
