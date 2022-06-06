import { GraphQLResolveInfo } from "graphql";
import { CreateManyUpload_file_morphArgs } from "./args/CreateManyUpload_file_morphArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUpload_file_morphResolver {
    createManyUpload_file_morph(ctx: any, info: GraphQLResolveInfo, args: CreateManyUpload_file_morphArgs): Promise<AffectedRowsOutput>;
}
