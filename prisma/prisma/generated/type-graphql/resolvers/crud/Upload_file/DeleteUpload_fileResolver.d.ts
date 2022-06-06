import { GraphQLResolveInfo } from "graphql";
import { DeleteUpload_fileArgs } from "./args/DeleteUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class DeleteUpload_fileResolver {
    deleteUpload_file(ctx: any, info: GraphQLResolveInfo, args: DeleteUpload_fileArgs): Promise<Upload_file | null>;
}
