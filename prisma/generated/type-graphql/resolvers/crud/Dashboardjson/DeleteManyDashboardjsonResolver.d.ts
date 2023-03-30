import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyDashboardjsonArgs } from "./args/DeleteManyDashboardjsonArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDashboardjsonResolver {
    deleteManyDashboardjson(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDashboardjsonArgs): Promise<AffectedRowsOutput>;
}
