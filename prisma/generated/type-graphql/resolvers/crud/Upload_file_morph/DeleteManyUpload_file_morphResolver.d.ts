import { GraphQLResolveInfo } from "graphql";
import { DeleteManyUpload_file_morphArgs } from "./args/DeleteManyUpload_file_morphArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUpload_file_morphResolver {
    deleteManyUpload_file_morph(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUpload_file_morphArgs): Promise<AffectedRowsOutput>;
}
