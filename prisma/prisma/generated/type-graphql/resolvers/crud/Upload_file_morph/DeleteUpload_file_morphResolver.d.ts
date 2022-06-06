import { GraphQLResolveInfo } from "graphql";
import { DeleteUpload_file_morphArgs } from "./args/DeleteUpload_file_morphArgs";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
export declare class DeleteUpload_file_morphResolver {
    deleteUpload_file_morph(ctx: any, info: GraphQLResolveInfo, args: DeleteUpload_file_morphArgs): Promise<Upload_file_morph | null>;
}
