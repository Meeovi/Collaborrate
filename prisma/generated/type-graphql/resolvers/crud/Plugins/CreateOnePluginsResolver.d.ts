import { GraphQLResolveInfo } from "graphql";
import { CreateOnePluginsArgs } from "./args/CreateOnePluginsArgs";
import { Plugins } from "../../../models/Plugins";
export declare class CreateOnePluginsResolver {
    createOnePlugins(ctx: any, info: GraphQLResolveInfo, args: CreateOnePluginsArgs): Promise<Plugins>;
}
