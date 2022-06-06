import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTasksArgs } from "./args/UpdateManyTasksArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTasksResolver {
    updateManyTasks(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTasksArgs): Promise<AffectedRowsOutput>;
}
