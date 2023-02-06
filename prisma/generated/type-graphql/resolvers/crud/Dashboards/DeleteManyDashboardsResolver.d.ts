import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDashboardsArgs } from "./args/DeleteManyDashboardsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDashboardsResolver {
    deleteManyDashboards(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDashboardsArgs): Promise<AffectedRowsOutput>;
}
