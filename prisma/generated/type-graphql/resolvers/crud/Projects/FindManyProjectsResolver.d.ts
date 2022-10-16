import { GraphQLResolveInfo } from "graphql";
import { FindManyProjectsArgs } from "./args/FindManyProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class FindManyProjectsResolver {
    findManyProjects(ctx: any, info: GraphQLResolveInfo, args: FindManyProjectsArgs): Promise<Projects[]>;
}
