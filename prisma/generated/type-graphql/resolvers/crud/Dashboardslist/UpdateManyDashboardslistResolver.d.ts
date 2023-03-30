import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyDashboardslistArgs } from "./args/UpdateManyDashboardslistArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDashboardslistResolver {
    updateManyDashboardslist(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDashboardslistArgs): Promise<AffectedRowsOutput>;
}
