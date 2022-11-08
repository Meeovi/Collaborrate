import { GraphQLResolveInfo } from "graphql";
import { FindFirstChannelsArgs } from "./args/FindFirstChannelsArgs";
import { Channels } from "../../../models/Channels";
export declare class FindFirstChannelsResolver {
    findFirstChannels(ctx: any, info: GraphQLResolveInfo, args: FindFirstChannelsArgs): Promise<Channels | null>;
}
