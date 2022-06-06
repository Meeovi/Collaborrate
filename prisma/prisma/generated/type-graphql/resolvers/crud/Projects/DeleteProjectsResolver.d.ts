import { GraphQLResolveInfo } from "graphql";
import { DeleteProjectsArgs } from "./args/DeleteProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class DeleteProjectsResolver {
    deleteProjects(ctx: any, info: GraphQLResolveInfo, args: DeleteProjectsArgs): Promise<Projects | null>;
}
