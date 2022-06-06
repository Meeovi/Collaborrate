import { GraphQLResolveInfo } from "graphql";
import { GroupByUpload_file_morphArgs } from "./args/GroupByUpload_file_morphArgs";
import { Upload_file_morphGroupBy } from "../../outputs/Upload_file_morphGroupBy";
export declare class GroupByUpload_file_morphResolver {
    groupByUpload_file_morph(ctx: any, info: GraphQLResolveInfo, args: GroupByUpload_file_morphArgs): Promise<Upload_file_morphGroupBy[]>;
}
