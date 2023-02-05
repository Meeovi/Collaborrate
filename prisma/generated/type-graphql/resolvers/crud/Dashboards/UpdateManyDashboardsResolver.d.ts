import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDashboardsArgs } from "./args/UpdateManyDashboardsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDashboardsResolver {
    updateManyDashboards(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDashboardsArgs): Promise<AffectedRowsOutput>;
}
