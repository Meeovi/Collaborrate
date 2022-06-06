import { GraphQLResolveInfo } from "graphql";
import { UpdateProjectsArgs } from "./args/UpdateProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class UpdateProjectsResolver {
    updateProjects(ctx: any, info: GraphQLResolveInfo, args: UpdateProjectsArgs): Promise<Projects | null>;
}
