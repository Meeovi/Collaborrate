import { GraphQLResolveInfo } from "graphql";
import { CreateOneChannelsArgs } from "./args/CreateOneChannelsArgs";
import { Channels } from "../../../models/Channels";
export declare class CreateOneChannelsResolver {
    createOneChannels(ctx: any, info: GraphQLResolveInfo, args: CreateOneChannelsArgs): Promise<Channels>;
}
