import { GraphQLResolveInfo } from "graphql";
import { CreateManyDashboardslidesArgs } from "./args/CreateManyDashboardslidesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDashboardslidesResolver {
    createManyDashboardslides(ctx: any, info: GraphQLResolveInfo, args: CreateManyDashboardslidesArgs): Promise<AffectedRowsOutput>;
}
