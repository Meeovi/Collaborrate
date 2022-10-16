import { GraphQLResolveInfo } from "graphql";
import { CreateManyProjectsArgs } from "./args/CreateManyProjectsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProjectsResolver {
    createManyProjects(ctx: any, info: GraphQLResolveInfo, args: CreateManyProjectsArgs): Promise<AffectedRowsOutput>;
}
