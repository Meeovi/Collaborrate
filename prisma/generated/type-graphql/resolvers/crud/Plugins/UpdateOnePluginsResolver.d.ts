import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePluginsArgs } from "./args/UpdateOnePluginsArgs";
import { Plugins } from "../../../models/Plugins";
export declare class UpdateOnePluginsResolver {
    updateOnePlugins(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePluginsArgs): Promise<Plugins | null>;
}
