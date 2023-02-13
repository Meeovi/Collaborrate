import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyDashboardrestapiArgs } from "./args/UpdateManyDashboardrestapiArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDashboardrestapiResolver {
    updateManyDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDashboardrestapiArgs): Promise<AffectedRowsOutput>;
}
