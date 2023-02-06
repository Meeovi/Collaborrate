import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPluginsArgs } from "./args/UpdateManyPluginsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPluginsResolver {
    updateManyPlugins(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPluginsArgs): Promise<AffectedRowsOutput>;
}
