import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyDashboardslistArgs } from "./args/DeleteManyDashboardslistArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDashboardslistResolver {
    deleteManyDashboardslist(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDashboardslistArgs): Promise<AffectedRowsOutput>;
}
