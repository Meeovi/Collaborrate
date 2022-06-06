import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCore_storeArgs } from "./args/UpdateManyCore_storeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCore_storeResolver {
    updateManyCore_store(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCore_storeArgs): Promise<AffectedRowsOutput>;
}
