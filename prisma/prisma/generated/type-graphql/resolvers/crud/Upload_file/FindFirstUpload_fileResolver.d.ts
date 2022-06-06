import { GraphQLResolveInfo } from "graphql";
import { FindFirstUpload_fileArgs } from "./args/FindFirstUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class FindFirstUpload_fileResolver {
    findFirstUpload_file(ctx: any, info: GraphQLResolveInfo, args: FindFirstUpload_fileArgs): Promise<Upload_file | null>;
}
