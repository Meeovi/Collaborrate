import { GraphQLResolveInfo } from "graphql";
import { UpsertUpload_fileArgs } from "./args/UpsertUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class UpsertUpload_fileResolver {
    upsertUpload_file(ctx: any, info: GraphQLResolveInfo, args: UpsertUpload_fileArgs): Promise<Upload_file>;
}
