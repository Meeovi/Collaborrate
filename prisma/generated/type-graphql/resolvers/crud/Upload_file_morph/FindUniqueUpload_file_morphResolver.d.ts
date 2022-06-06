import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUpload_file_morphArgs } from "./args/FindUniqueUpload_file_morphArgs";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
export declare class FindUniqueUpload_file_morphResolver {
    upload_file_morph(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUpload_file_morphArgs): Promise<Upload_file_morph | null>;
}
