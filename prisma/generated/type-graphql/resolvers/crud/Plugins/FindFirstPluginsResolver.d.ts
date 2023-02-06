import { GraphQLResolveInfo } from "graphql";
import { FindFirstPluginsArgs } from "./args/FindFirstPluginsArgs";
import { Plugins } from "../../../models/Plugins";
export declare class FindFirstPluginsResolver {
    findFirstPlugins(ctx: any, info: GraphQLResolveInfo, args: FindFirstPluginsArgs): Promise<Plugins | null>;
}
