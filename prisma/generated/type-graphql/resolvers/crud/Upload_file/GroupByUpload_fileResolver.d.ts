import { GraphQLResolveInfo } from "graphql";
import { GroupByUpload_fileArgs } from "./args/GroupByUpload_fileArgs";
import { Upload_fileGroupBy } from "../../outputs/Upload_fileGroupBy";
export declare class GroupByUpload_fileResolver {
    groupByUpload_file(ctx: any, info: GraphQLResolveInfo, args: GroupByUpload_fileArgs): Promise<Upload_fileGroupBy[]>;
}
