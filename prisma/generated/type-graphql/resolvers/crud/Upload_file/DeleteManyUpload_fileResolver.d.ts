import { GraphQLResolveInfo } from "graphql";
import { DeleteManyUpload_fileArgs } from "./args/DeleteManyUpload_fileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUpload_fileResolver {
    deleteManyUpload_file(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUpload_fileArgs): Promise<AffectedRowsOutput>;
}
