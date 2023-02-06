import { GraphQLResolveInfo } from "graphql";
import { FindManyChannelsArgs } from "./args/FindManyChannelsArgs";
import { Channels } from "../../../models/Channels";
export declare class FindManyChannelsResolver {
    findManyChannels(ctx: any, info: GraphQLResolveInfo, args: FindManyChannelsArgs): Promise<Channels[]>;
}
