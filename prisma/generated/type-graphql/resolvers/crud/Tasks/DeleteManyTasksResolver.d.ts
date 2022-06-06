import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTasksArgs } from "./args/DeleteManyTasksArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTasksResolver {
    deleteManyTasks(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTasksArgs): Promise<AffectedRowsOutput>;
}
