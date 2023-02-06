import { GraphQLResolveInfo } from "graphql";
import { CreateManyDashboardjsonArgs } from "./args/CreateManyDashboardjsonArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDashboardjsonResolver {
    createManyDashboardjson(ctx: any, info: GraphQLResolveInfo, args: CreateManyDashboardjsonArgs): Promise<AffectedRowsOutput>;
}
