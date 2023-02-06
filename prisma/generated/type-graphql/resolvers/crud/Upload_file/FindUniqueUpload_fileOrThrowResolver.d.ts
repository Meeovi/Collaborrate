import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUpload_fileOrThrowArgs } from "./args/FindUniqueUpload_fileOrThrowArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class FindUniqueUpload_fileOrThrowResolver {
    getUpload_file(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUpload_fileOrThrowArgs): Promise<Upload_file | null>;
}
