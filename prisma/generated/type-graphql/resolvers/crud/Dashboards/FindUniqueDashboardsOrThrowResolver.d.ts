import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDashboardsOrThrowArgs } from "./args/FindUniqueDashboardsOrThrowArgs";
import { Dashboards } from "../../../models/Dashboards";
export declare class FindUniqueDashboardsOrThrowResolver {
    findUniqueDashboardsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDashboardsOrThrowArgs): Promise<Dashboards | null>;
}
