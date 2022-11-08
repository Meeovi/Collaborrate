import { GraphQLResolveInfo } from "graphql";
import { FindUniqueChannelsArgs } from "./args/FindUniqueChannelsArgs";
import { Channels } from "../../../models/Channels";
export declare class FindUniqueChannelsResolver {
    findUniqueChannels(ctx: any, info: GraphQLResolveInfo, args: FindUniqueChannelsArgs): Promise<Channels | null>;
}
