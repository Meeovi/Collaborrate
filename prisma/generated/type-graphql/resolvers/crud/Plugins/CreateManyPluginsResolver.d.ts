import { GraphQLResolveInfo } from "graphql";
import { CreateManyPluginsArgs } from "./args/CreateManyPluginsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPluginsResolver {
    createManyPlugins(ctx: any, info: GraphQLResolveInfo, args: CreateManyPluginsArgs): Promise<AffectedRowsOutput>;
}
