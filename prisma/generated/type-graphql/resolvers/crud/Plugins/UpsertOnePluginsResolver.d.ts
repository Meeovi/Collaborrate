import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePluginsArgs } from "./args/UpsertOnePluginsArgs";
import { Plugins } from "../../../models/Plugins";
export declare class UpsertOnePluginsResolver {
    upsertOnePlugins(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePluginsArgs): Promise<Plugins>;
}
