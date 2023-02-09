import { GraphQLResolveInfo } from "graphql";
import { CreateManyDashboardslistArgs } from "./args/CreateManyDashboardslistArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDashboardslistResolver {
    createManyDashboardslist(ctx: any, info: GraphQLResolveInfo, args: CreateManyDashboardslistArgs): Promise<AffectedRowsOutput>;
}
