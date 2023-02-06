import { GraphQLResolveInfo } from "graphql";
import { GroupByMediamanagerArgs } from "./args/GroupByMediamanagerArgs";
import { MediamanagerGroupBy } from "../../outputs/MediamanagerGroupBy";
export declare class GroupByMediamanagerResolver {
    groupByMediamanager(ctx: any, info: GraphQLResolveInfo, args: GroupByMediamanagerArgs): Promise<MediamanagerGroupBy[]>;
}
