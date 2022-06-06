import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReportsArgs } from "./args/DeleteManyReportsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReportsResolver {
    deleteManyReports(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReportsArgs): Promise<AffectedRowsOutput>;
}
