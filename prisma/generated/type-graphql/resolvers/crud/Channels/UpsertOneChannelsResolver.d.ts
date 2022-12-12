import { GraphQLResolveInfo } from "graphql";
import { UpsertOneChannelsArgs } from "./args/UpsertOneChannelsArgs";
import { Channels } from "../../../models/Channels";
export declare class UpsertOneChannelsResolver {
    upsertOneChannels(ctx: any, info: GraphQLResolveInfo, args: UpsertOneChannelsArgs): Promise<Channels>;
}
