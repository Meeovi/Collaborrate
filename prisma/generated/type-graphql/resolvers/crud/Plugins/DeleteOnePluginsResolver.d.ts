import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePluginsArgs } from "./args/DeleteOnePluginsArgs";
import { Plugins } from "../../../models/Plugins";
export declare class DeleteOnePluginsResolver {
    deleteOnePlugins(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePluginsArgs): Promise<Plugins | null>;
}
