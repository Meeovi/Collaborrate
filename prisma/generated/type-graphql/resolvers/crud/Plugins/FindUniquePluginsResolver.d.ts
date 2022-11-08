import { GraphQLResolveInfo } from "graphql";
import { FindUniquePluginsArgs } from "./args/FindUniquePluginsArgs";
import { Plugins } from "../../../models/Plugins";
export declare class FindUniquePluginsResolver {
    findUniquePlugins(ctx: any, info: GraphQLResolveInfo, args: FindUniquePluginsArgs): Promise<Plugins | null>;
}
