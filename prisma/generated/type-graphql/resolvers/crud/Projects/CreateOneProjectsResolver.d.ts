import { GraphQLResolveInfo } from "graphql";
import { CreateOneProjectsArgs } from "./args/CreateOneProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class CreateOneProjectsResolver {
    createOneProjects(ctx: any, info: GraphQLResolveInfo, args: CreateOneProjectsArgs): Promise<Projects>;
}
