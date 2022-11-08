import { GraphQLResolveInfo } from "graphql";
import { GroupByChannelsArgs } from "./args/GroupByChannelsArgs";
import { ChannelsGroupBy } from "../../outputs/ChannelsGroupBy";
export declare class GroupByChannelsResolver {
    groupByChannels(ctx: any, info: GraphQLResolveInfo, args: GroupByChannelsArgs): Promise<ChannelsGroupBy[]>;
}
