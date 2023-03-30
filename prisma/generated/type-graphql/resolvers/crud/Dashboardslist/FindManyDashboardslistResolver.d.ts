import type { GraphQLResolveInfo } from "graphql";
import { FindManyDashboardslistArgs } from "./args/FindManyDashboardslistArgs";
import { Dashboardslist } from "../../../models/Dashboardslist";
export declare class FindManyDashboardslistResolver {
    dashboardslists(ctx: any, info: GraphQLResolveInfo, args: FindManyDashboardslistArgs): Promise<Dashboardslist[]>;
}
