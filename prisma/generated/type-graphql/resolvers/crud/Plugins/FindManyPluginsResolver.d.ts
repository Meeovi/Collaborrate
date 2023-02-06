import { GraphQLResolveInfo } from "graphql";
import { FindManyPluginsArgs } from "./args/FindManyPluginsArgs";
import { Plugins } from "../../../models/Plugins";
export declare class FindManyPluginsResolver {
    findManyPlugins(ctx: any, info: GraphQLResolveInfo, args: FindManyPluginsArgs): Promise<Plugins[]>;
}
