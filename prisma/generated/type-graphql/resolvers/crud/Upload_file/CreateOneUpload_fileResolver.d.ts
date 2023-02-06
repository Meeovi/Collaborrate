import { GraphQLResolveInfo } from "graphql";
import { CreateOneUpload_fileArgs } from "./args/CreateOneUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
export declare class CreateOneUpload_fileResolver {
    createOneUpload_file(ctx: any, info: GraphQLResolveInfo, args: CreateOneUpload_fileArgs): Promise<Upload_file>;
}
