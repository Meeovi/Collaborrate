import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyDashboardslidesArgs } from "./args/DeleteManyDashboardslidesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDashboardslidesResolver {
    deleteManyDashboardslides(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDashboardslidesArgs): Promise<AffectedRowsOutput>;
}
