import { GraphQLResolveInfo } from "graphql";
import { CreateOneDashboardsArgs } from "./args/CreateOneDashboardsArgs";
import { Dashboards } from "../../../models/Dashboards";
export declare class CreateOneDashboardsResolver {
    createOneDashboards(ctx: any, info: GraphQLResolveInfo, args: CreateOneDashboardsArgs): Promise<Dashboards>;
}
