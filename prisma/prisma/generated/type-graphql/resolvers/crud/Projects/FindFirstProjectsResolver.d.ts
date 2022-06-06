import { GraphQLResolveInfo } from "graphql";
import { FindFirstProjectsArgs } from "./args/FindFirstProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class FindFirstProjectsResolver {
    findFirstProjects(ctx: any, info: GraphQLResolveInfo, args: FindFirstProjectsArgs): Promise<Projects | null>;
}
