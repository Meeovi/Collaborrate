import { GraphQLResolveInfo } from "graphql";
import { CreateManyDashboardrestapiArgs } from "./args/CreateManyDashboardrestapiArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDashboardrestapiResolver {
    createManyDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: CreateManyDashboardrestapiArgs): Promise<AffectedRowsOutput>;
}
