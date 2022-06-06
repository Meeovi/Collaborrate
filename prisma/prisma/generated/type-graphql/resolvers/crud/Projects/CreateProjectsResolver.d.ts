import { GraphQLResolveInfo } from "graphql";
import { CreateProjectsArgs } from "./args/CreateProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class CreateProjectsResolver {
    createProjects(ctx: any, info: GraphQLResolveInfo, args: CreateProjectsArgs): Promise<Projects>;
}
