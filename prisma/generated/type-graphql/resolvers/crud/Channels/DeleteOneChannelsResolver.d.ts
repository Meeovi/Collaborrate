import { GraphQLResolveInfo } from "graphql";
import { DeleteOneChannelsArgs } from "./args/DeleteOneChannelsArgs";
import { Channels } from "../../../models/Channels";
export declare class DeleteOneChannelsResolver {
    deleteOneChannels(ctx: any, info: GraphQLResolveInfo, args: DeleteOneChannelsArgs): Promise<Channels | null>;
}
