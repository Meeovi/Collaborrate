import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyDashboardgraphqlArgs } from "./args/UpdateManyDashboardgraphqlArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDashboardgraphqlResolver {
    updateManyDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDashboardgraphqlArgs): Promise<AffectedRowsOutput>;
}
