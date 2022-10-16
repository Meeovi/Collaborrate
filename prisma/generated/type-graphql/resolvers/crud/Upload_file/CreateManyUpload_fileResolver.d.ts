import { GraphQLResolveInfo } from "graphql";
import { CreateManyUpload_fileArgs } from "./args/CreateManyUpload_fileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUpload_fileResolver {
    createManyUpload_file(ctx: any, info: GraphQLResolveInfo, args: CreateManyUpload_fileArgs): Promise<AffectedRowsOutput>;
}
