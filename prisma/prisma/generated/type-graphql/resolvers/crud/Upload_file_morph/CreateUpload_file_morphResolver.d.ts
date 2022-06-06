import { GraphQLResolveInfo } from "graphql";
import { CreateUpload_file_morphArgs } from "./args/CreateUpload_file_morphArgs";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
export declare class CreateUpload_file_morphResolver {
    createUpload_file_morph(ctx: any, info: GraphQLResolveInfo, args: CreateUpload_file_morphArgs): Promise<Upload_file_morph>;
}
