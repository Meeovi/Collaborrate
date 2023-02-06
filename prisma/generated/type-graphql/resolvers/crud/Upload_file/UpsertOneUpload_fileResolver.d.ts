import { GraphQLResolveInfo } from "graphql";
import { UpsertOneUpload_fileArgs } from "./args/UpsertOneUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class UpsertOneUpload_fileResolver {
    upsertOneUpload_file(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUpload_fileArgs): Promise<Upload_file>;
}
