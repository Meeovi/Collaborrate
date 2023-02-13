import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyDashboardslidesArgs } from "./args/UpdateManyDashboardslidesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDashboardslidesResolver {
    updateManyDashboardslides(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDashboardslidesArgs): Promise<AffectedRowsOutput>;
}
