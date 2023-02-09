import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPluginsArgs } from "./args/DeleteManyPluginsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPluginsResolver {
    deleteManyPlugins(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPluginsArgs): Promise<AffectedRowsOutput>;
}
