import { GraphQLResolveInfo } from "graphql";
import { FindUniqueChannelsOrThrowArgs } from "./args/FindUniqueChannelsOrThrowArgs";
import { Channels } from "../../../models/Channels";
export declare class FindUniqueChannelsOrThrowResolver {
    findUniqueChannelsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueChannelsOrThrowArgs): Promise<Channels | null>;
}
