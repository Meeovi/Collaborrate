import { GraphQLResolveInfo } from "graphql";
import { UpdateOneUpload_fileArgs } from "./args/UpdateOneUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class UpdateOneUpload_fileResolver {
    updateOneUpload_file(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUpload_fileArgs): Promise<Upload_file | null>;
}
