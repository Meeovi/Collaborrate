import { GraphQLResolveInfo } from "graphql";
import { CreateUpload_fileArgs } from "./args/CreateUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class CreateUpload_fileResolver {
    createUpload_file(ctx: any, info: GraphQLResolveInfo, args: CreateUpload_fileArgs): Promise<Upload_file>;
}
