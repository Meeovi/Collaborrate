import { GraphQLResolveInfo } from "graphql";
import { CreateManyDashboardsArgs } from "./args/CreateManyDashboardsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDashboardsResolver {
    createManyDashboards(ctx: any, info: GraphQLResolveInfo, args: CreateManyDashboardsArgs): Promise<AffectedRowsOutput>;
}
