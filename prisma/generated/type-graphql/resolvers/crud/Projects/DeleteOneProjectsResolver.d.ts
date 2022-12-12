import { GraphQLResolveInfo } from "graphql";
import { DeleteOneProjectsArgs } from "./args/DeleteOneProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class DeleteOneProjectsResolver {
    deleteOneProjects(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProjectsArgs): Promise<Projects | null>;
}
