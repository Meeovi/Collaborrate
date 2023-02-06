import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUpload_fileArgs } from "./args/DeleteOneUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class DeleteOneUpload_fileResolver {
    deleteOneUpload_file(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUpload_fileArgs): Promise<Upload_file | null>;
}
