import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyDashboardjsonArgs } from "./args/UpdateManyDashboardjsonArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDashboardjsonResolver {
    updateManyDashboardjson(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDashboardjsonArgs): Promise<AffectedRowsOutput>;
}
