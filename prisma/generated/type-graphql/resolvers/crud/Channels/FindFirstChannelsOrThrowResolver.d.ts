import { GraphQLResolveInfo } from "graphql";
import { FindFirstChannelsOrThrowArgs } from "./args/FindFirstChannelsOrThrowArgs";
import { Channels } from "../../../models/Channels";
export declare class FindFirstChannelsOrThrowResolver {
    findFirstChannelsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstChannelsOrThrowArgs): Promise<Channels | null>;
}
