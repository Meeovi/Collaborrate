import { GraphQLResolveInfo } from "graphql";
import { CreateManyTasksArgs } from "./args/CreateManyTasksArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTasksResolver {
    createManyTasks(ctx: any, info: GraphQLResolveInfo, args: CreateManyTasksArgs): Promise<AffectedRowsOutput>;
}
