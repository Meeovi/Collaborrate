import { GraphQLResolveInfo } from "graphql";
import { UpdateOneProjectsArgs } from "./args/UpdateOneProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class UpdateOneProjectsResolver {
    updateOneProjects(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProjectsArgs): Promise<Projects | null>;
}
