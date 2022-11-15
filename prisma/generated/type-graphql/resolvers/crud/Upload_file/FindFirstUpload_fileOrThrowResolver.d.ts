import { GraphQLResolveInfo } from "graphql";
import { FindFirstUpload_fileOrThrowArgs } from "./args/FindFirstUpload_fileOrThrowArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class FindFirstUpload_fileOrThrowResolver {
    findFirstUpload_fileOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstUpload_fileOrThrowArgs): Promise<Upload_file | null>;
}
