import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyDashboardrestapiArgs } from "./args/DeleteManyDashboardrestapiArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDashboardrestapiResolver {
    deleteManyDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDashboardrestapiArgs): Promise<AffectedRowsOutput>;
}
