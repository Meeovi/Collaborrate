import { GraphQLResolveInfo } from "graphql";
import { UpdateOneChannelsArgs } from "./args/UpdateOneChannelsArgs";
import { Channels } from "../../../models/Channels";
export declare class UpdateOneChannelsResolver {
    updateOneChannels(ctx: any, info: GraphQLResolveInfo, args: UpdateOneChannelsArgs): Promise<Channels | null>;
}
