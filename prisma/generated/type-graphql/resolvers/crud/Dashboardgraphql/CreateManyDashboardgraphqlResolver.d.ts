import { GraphQLResolveInfo } from "graphql";
import { CreateManyDashboardgraphqlArgs } from "./args/CreateManyDashboardgraphqlArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDashboardgraphqlResolver {
    createManyDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: CreateManyDashboardgraphqlArgs): Promise<AffectedRowsOutput>;
}
