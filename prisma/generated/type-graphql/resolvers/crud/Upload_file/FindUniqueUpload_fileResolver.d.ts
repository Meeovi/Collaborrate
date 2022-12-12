import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUpload_fileArgs } from "./args/FindUniqueUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class FindUniqueUpload_fileResolver {
    upload_file(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUpload_fileArgs): Promise<Upload_file | null>;
}
