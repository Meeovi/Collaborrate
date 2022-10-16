import { GraphQLResolveInfo } from "graphql";
import { AggregateUpload_fileArgs } from "./args/AggregateUpload_fileArgs";
import { AggregateUpload_file } from "../../outputs/AggregateUpload_file";
export declare class AggregateUpload_fileResolver {
    aggregateUpload_file(ctx: any, info: GraphQLResolveInfo, args: AggregateUpload_fileArgs): Promise<AggregateUpload_file>;
}
