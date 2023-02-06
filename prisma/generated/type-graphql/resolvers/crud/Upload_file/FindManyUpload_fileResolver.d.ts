import { GraphQLResolveInfo } from "graphql";
import { FindManyUpload_fileArgs } from "./args/FindManyUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class FindManyUpload_fileResolver {
    upload_files(ctx: any, info: GraphQLResolveInfo, args: FindManyUpload_fileArgs): Promise<Upload_file[]>;
}
