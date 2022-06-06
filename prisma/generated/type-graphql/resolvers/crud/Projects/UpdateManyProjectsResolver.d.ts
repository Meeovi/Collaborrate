import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProjectsArgs } from "./args/UpdateManyProjectsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProjectsResolver {
    updateManyProjects(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProjectsArgs): Promise<AffectedRowsOutput>;
}
