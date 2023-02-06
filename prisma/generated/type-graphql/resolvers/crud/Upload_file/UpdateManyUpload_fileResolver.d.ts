import { GraphQLResolveInfo } from "graphql";
import { UpdateManyUpload_fileArgs } from "./args/UpdateManyUpload_fileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUpload_fileResolver {
    updateManyUpload_file(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUpload_fileArgs): Promise<AffectedRowsOutput>;
}
