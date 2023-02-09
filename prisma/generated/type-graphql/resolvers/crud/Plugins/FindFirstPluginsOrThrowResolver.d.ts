import { GraphQLResolveInfo } from "graphql";
import { FindFirstPluginsOrThrowArgs } from "./args/FindFirstPluginsOrThrowArgs";
import { Plugins } from "../../../models/Plugins";
export declare class FindFirstPluginsOrThrowResolver {
    findFirstPluginsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPluginsOrThrowArgs): Promise<Plugins | null>;
}
