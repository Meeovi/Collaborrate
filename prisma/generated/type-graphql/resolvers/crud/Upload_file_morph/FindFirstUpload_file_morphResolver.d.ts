import { GraphQLResolveInfo } from "graphql";
import { FindFirstUpload_file_morphArgs } from "./args/FindFirstUpload_file_morphArgs";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
export declare class FindFirstUpload_file_morphResolver {
    findFirstUpload_file_morph(ctx: any, info: GraphQLResolveInfo, args: FindFirstUpload_file_morphArgs): Promise<Upload_file_morph | null>;
}
