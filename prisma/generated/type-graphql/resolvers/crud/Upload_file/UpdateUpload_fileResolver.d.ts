import { GraphQLResolveInfo } from "graphql";
import { UpdateUpload_fileArgs } from "./args/UpdateUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class UpdateUpload_fileResolver {
    updateUpload_file(ctx: any, info: GraphQLResolveInfo, args: UpdateUpload_fileArgs): Promise<Upload_file | null>;
}
