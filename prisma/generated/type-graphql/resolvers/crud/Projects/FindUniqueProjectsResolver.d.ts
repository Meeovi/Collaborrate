import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProjectsArgs } from "./args/FindUniqueProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class FindUniqueProjectsResolver {
    findUniqueProjects(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProjectsArgs): Promise<Projects | null>;
}
