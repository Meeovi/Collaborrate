import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReturnsArgs } from "./args/DeleteManyReturnsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReturnsResolver {
    deleteManyReturns(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReturnsArgs): Promise<AffectedRowsOutput>;
}
