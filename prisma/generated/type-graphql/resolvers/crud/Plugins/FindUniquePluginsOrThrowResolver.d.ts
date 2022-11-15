import { GraphQLResolveInfo } from "graphql";
import { FindUniquePluginsOrThrowArgs } from "./args/FindUniquePluginsOrThrowArgs";
import { Plugins } from "../../../models/Plugins";
export declare class FindUniquePluginsOrThrowResolver {
    findUniquePluginsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniquePluginsOrThrowArgs): Promise<Plugins | null>;
}
