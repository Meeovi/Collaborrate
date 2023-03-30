import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyDashboardgraphqlArgs } from "./args/DeleteManyDashboardgraphqlArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDashboardgraphqlResolver {
    deleteManyDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDashboardgraphqlArgs): Promise<AffectedRowsOutput>;
}
