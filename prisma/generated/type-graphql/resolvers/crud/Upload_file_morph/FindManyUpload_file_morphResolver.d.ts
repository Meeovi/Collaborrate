import { GraphQLResolveInfo } from "graphql";
import { FindManyUpload_file_morphArgs } from "./args/FindManyUpload_file_morphArgs";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
export declare class FindManyUpload_file_morphResolver {
    upload_file_morphs(ctx: any, info: GraphQLResolveInfo, args: FindManyUpload_file_morphArgs): Promise<Upload_file_morph[]>;
}
