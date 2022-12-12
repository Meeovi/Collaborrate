import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProjectsArgs } from "./args/DeleteManyProjectsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProjectsResolver {
    deleteManyProjects(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProjectsArgs): Promise<AffectedRowsOutput>;
}
