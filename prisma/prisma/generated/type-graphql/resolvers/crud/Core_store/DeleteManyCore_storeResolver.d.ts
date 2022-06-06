import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCore_storeArgs } from "./args/DeleteManyCore_storeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCore_storeResolver {
    deleteManyCore_store(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCore_storeArgs): Promise<AffectedRowsOutput>;
}
