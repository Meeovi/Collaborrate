import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReportsArgs } from "./args/UpdateManyReportsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReportsResolver {
    updateManyReports(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReportsArgs): Promise<AffectedRowsOutput>;
}
