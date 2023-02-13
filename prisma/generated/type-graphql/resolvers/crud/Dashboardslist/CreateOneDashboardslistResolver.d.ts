import type { GraphQLResolveInfo } from "graphql";
import { CreateOneDashboardslistArgs } from "./args/CreateOneDashboardslistArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
export declare class CreateOneDashboardslistResolver {
    createOneDashboardslist(ctx: any, info: GraphQLResolveInfo, args: CreateOneDashboardslistArgs): Promise<Dashboardslist>;
}
