import { GraphQLResolveInfo } from "graphql";
import { AggregateChannelsArgs } from "./args/AggregateChannelsArgs";
import { AggregateChannels } from "../../outputs/AggregateChannels";
export declare class AggregateChannelsResolver {
    aggregateChannels(ctx: any, info: GraphQLResolveInfo, args: AggregateChannelsArgs): Promise<AggregateChannels>;
}
